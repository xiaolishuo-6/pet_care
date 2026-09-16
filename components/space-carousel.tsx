"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";

const MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const SLIDE_COUNT = 3;
const AUTOPLAY_MS = 5600;

function subscribeMotion(callback: () => void) {
  const media = window.matchMedia(MOTION_QUERY);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function subscribeVisibility(callback: () => void) {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
}

const getReducedMotion = () => window.matchMedia(MOTION_QUERY).matches;
const getHidden = () => document.hidden;
const getServerSnapshot = () => false;

export function SpaceCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [pauseOverride, setPauseOverride] = useState<boolean | null>(null);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [selectionRevision, setSelectionRevision] = useState(0);
  const reducedMotion = useSyncExternalStore(
    subscribeMotion,
    getReducedMotion,
    getServerSnapshot,
  );
  const hidden = useSyncExternalStore(
    subscribeVisibility,
    getHidden,
    getServerSnapshot,
  );
  const paused = pauseOverride ?? reducedMotion;

  useEffect(() => {
    if (paused || hovered || focused || hidden) return;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % SLIDE_COUNT);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused, hovered, focused, hidden, selectionRevision]);

  function selectSlide(index: number) {
    setActiveSlide((index + SLIDE_COUNT) % SLIDE_COUNT);
    setSelectionRevision((revision) => revision + 1);
  }

  return (
    <div
      className="space-carousel"
      data-carousel=""
      data-reveal=""
      aria-roledescription="轮播图"
      aria-label="门店空间实景"
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          selectSlide(activeSlide + (event.key === "ArrowLeft" ? -1 : 1));
        }
      }}
    >
      <div className="space-viewport">
        <div
          className="space-track"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          <article className="space-slide" aria-hidden={activeSlide !== 0}>
            <Image
              src="/assets/store-reception.png"
              alt="墨绿色与浅木色搭配的高端宠物洗护店迎宾前台和休息区"
              width={1672}
              height={939}
              loading="lazy"
            />
            <div className="space-caption">
              <div>
                <h3>迎宾与等候区</h3>
                <p>
                  自然采光、柔软坐席与开阔动线，到店先熟悉环境，再慢慢进入洗护节奏。
                </p>
              </div>
              <span className="space-index">01 / 03</span>
            </div>
          </article>
          <article className="space-slide" aria-hidden={activeSlide !== 1}>
            <Image
              src="/assets/store-wash-zone.png"
              alt="以通透玻璃分隔的高端宠物洗护水疗区"
              width={1672}
              height={939}
              loading="lazy"
            />
            <div className="space-caption">
              <div>
                <h3>透明洗护区</h3>
                <p>
                  犬猫分区、独立操作，耐水材质与专业设备让清洁更卫生，洗护过程更直观。
                </p>
              </div>
              <span className="space-index">02 / 03</span>
            </div>
          </article>
          <article className="space-slide" aria-hidden={activeSlide !== 2}>
            <Image
              src="/assets/store-grooming-suite.png"
              alt="带独立美容台和安静休息间的高端宠物造型区"
              width={1672}
              height={939}
              loading="lazy"
            />
            <div className="space-caption">
              <div>
                <h3>吹护与美容区</h3>
                <p>
                  宽敞工位、柔和灯光与独立静养空间，兼顾专业效率和毛孩子的情绪感受。
                </p>
              </div>
              <span className="space-index">03 / 03</span>
            </div>
          </article>
        </div>
      </div>
      <div className="space-controls">
        <div className="space-dots" role="group" aria-label="选择门店空间">
          <button
            className="space-dot"
            type="button"
            aria-label="查看迎宾与等候区"
            aria-current={activeSlide === 0}
            onClick={() => selectSlide(0)}
          ></button>
          <button
            className="space-dot"
            type="button"
            aria-label="查看透明洗护区"
            aria-current={activeSlide === 1}
            onClick={() => selectSlide(1)}
          ></button>
          <button
            className="space-dot"
            type="button"
            aria-label="查看吹护与美容区"
            aria-current={activeSlide === 2}
            onClick={() => selectSlide(2)}
          ></button>
        </div>
        <div className="space-arrows">
          <button
            className="space-arrow space-prev"
            onClick={() => selectSlide(activeSlide - 1)}
            type="button"
            aria-label="上一张"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            className="space-arrow space-toggle"
            type="button"
            aria-label={paused ? "继续自动播放" : "暂停自动播放"}
            aria-pressed={paused}
            onClick={() => setPauseOverride(!paused)}
          >
            <svg
              className="space-pause"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M9 6v12M15 6v12" />
            </svg>
            <svg
              className="space-play"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="m9 6 9 6-9 6Z" />
            </svg>
          </button>
          <button
            className="space-arrow space-next"
            onClick={() => selectSlide(activeSlide + 1)}
            type="button"
            aria-label="下一张"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
