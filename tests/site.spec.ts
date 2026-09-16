import { expect, test } from "@playwright/test";

test("scroll reveals offscreen content and reacts to reduced motion", async ({ page }) => {
  await page.goto("/");
  const card = page.locator(".contact-card");
  await expect(card).toHaveClass(/reveal-pending/);
  await card.scrollIntoViewIfNeeded();
  await expect(card).toHaveClass(/is-visible/);
  await expect(card).toHaveCSS("opacity", "1");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator(".reveal-pending")).toHaveCount(0);
  await expect(page.getByRole("button", { name: "继续自动播放" })).toHaveAttribute("aria-pressed", "true");
});

for (const width of [1440, 768, 390]) {
  test(`static page and assets at ${width}px`, async ({ page, request }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("response", (response) => {
      if (response.status() >= 400)
        errors.push(`${response.status()} ${response.url()}`);
    });
    await page.goto("/");
    await expect(page).toHaveTitle("爪爪沐光｜宠物洗护");
    await expect(page.locator("html")).toHaveAttribute("lang", "zh-CN");
    await expect(page.locator("main > section")).toHaveCount(7);
    for (const id of [
      "services",
      "pricing",
      "spaces",
      "process",
      "location",
      "contact",
    ]) {
      await page.locator(`#${id}`).scrollIntoViewIfNeeded();
      await expect(page.locator(`#${id} h2`)).toBeVisible();
    }
    const sources = await page
      .locator("img")
      .evaluateAll((images) =>
        images.map((image) => image.getAttribute("src")!),
      );
    expect(sources).toHaveLength(5);
    for (const source of sources)
      expect((await request.get(source)).status()).toBe(200);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    await expect(page.locator('a[href="tel:4008880618"]')).toBeVisible();
    await expect(page.locator('a[href="sms:4008880618"]')).toBeVisible();
    await expect(
      page.locator('a[href^="https://uri.amap.com/search"]'),
    ).toHaveAttribute("rel", "noopener noreferrer");
    expect(errors).toEqual([]);
  });
}

test("mobile navigation closes after following an anchor", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menu = page.locator(".menu-button");
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await expect(menu).toHaveAttribute("aria-label", "关闭导航菜单");
  await page.locator('#site-menu a[href="#services"]').click();
  await expect(page).toHaveURL(/#services$/);
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toHaveAttribute("aria-label", "打开导航菜单");
  await expect(page.locator("#site-menu")).toBeHidden();
});

test("carousel controls wrap and expose the active slide", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const slides = page.locator(".space-slide");
  await page.getByRole("button", { name: "上一张", exact: true }).click();
  await expect(slides.nth(2)).toHaveAttribute("aria-hidden", "false");
  await page.getByRole("button", { name: "下一张", exact: true }).click();
  await expect(slides.nth(0)).toHaveAttribute("aria-hidden", "false");
  await page.getByRole("button", { name: "查看透明洗护区" }).click();
  await expect(slides.nth(1)).toHaveAttribute("aria-hidden", "false");
  await expect(
    page.getByRole("button", { name: "查看透明洗护区" }),
  ).toHaveAttribute("aria-current", "true");
  await page.locator(".space-carousel").press("ArrowRight");
  await expect(slides.nth(2)).toHaveAttribute("aria-hidden", "false");
  await page.locator(".space-carousel").press("ArrowLeft");
  await expect(slides.nth(1)).toHaveAttribute("aria-hidden", "false");
});

test("autoplay respects hover, focus, manual pause and page visibility", async ({
  page,
}) => {
  await page.clock.install();
  await page.goto("/");
  const slides = page.locator(".space-slide");
  const carousel = page.locator(".space-carousel");
  await expect(
    page.getByRole("button", { name: "暂停自动播放" }),
  ).toHaveAttribute("aria-pressed", "false");
  await page.clock.fastForward(5600);
  await expect(slides.nth(1)).toHaveAttribute("aria-hidden", "false");
  await carousel.hover();
  await page.clock.fastForward(11200);
  await expect(slides.nth(1)).toHaveAttribute("aria-hidden", "false");
  await carousel.focus();
  await page.mouse.move(0, 0);
  await page.clock.fastForward(5600);
  await expect(slides.nth(1)).toHaveAttribute("aria-hidden", "false");
  await page.locator(".brand").focus();
  await page.clock.fastForward(5600);
  await expect(slides.nth(2)).toHaveAttribute("aria-hidden", "false");
  await page.getByRole("button", { name: "暂停自动播放" }).click();
  await page.locator(".brand").focus();
  await page.mouse.move(0, 0);
  await page.clock.fastForward(11200);
  await expect(slides.nth(2)).toHaveAttribute("aria-hidden", "false");
  await page.getByRole("button", { name: "继续自动播放" }).click();
  await page.locator(".brand").focus();
  await page.mouse.move(0, 0);
  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", {
      configurable: true,
      value: true,
    });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await page.clock.fastForward(11200);
  await expect(slides.nth(2)).toHaveAttribute("aria-hidden", "false");
  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", {
      configurable: true,
      value: false,
    });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await page.clock.fastForward(5600);
  await expect(slides.nth(0)).toHaveAttribute("aria-hidden", "false");
});

test("reduced motion keeps content visible and autoplay paused", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.clock.install();
  await page.goto("/");
  await expect(
    page.getByRole("button", { name: "继续自动播放" }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.clock.fastForward(11200);
  await expect(page.locator(".space-slide").first()).toHaveAttribute(
    "aria-hidden",
    "false",
  );
  expect(
    await page
      .locator("[data-reveal]")
      .evaluateAll((elements) =>
        elements.every((element) => getComputedStyle(element).opacity === "1"),
      ),
  ).toBe(true);
});

test("static content remains readable without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://localhost:3000");
  for (const id of [
    "services",
    "pricing",
    "spaces",
    "process",
    "location",
    "contact",
  ]) {
    const heading = page.locator(`#${id} h2`);
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
    expect(
      await heading.evaluate((element) => {
        const container = element.closest("[data-reveal]");
        return !container || getComputedStyle(container).opacity === "1";
      }),
    ).toBe(true);
  }
  await context.close();
});
