"use client";

import { useState } from "react";

function getTomorrowMorning() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(9, 30, 0, 0);

  const localDateParts = [
    tomorrow.getFullYear(),
    String(tomorrow.getMonth() + 1).padStart(2, "0"),
    String(tomorrow.getDate()).padStart(2, "0"),
  ];

  return `${localDateParts.join("-")}T09:30`;
}

export function Contact() {
  const [expectedVisit, setExpectedVisit] = useState(getTomorrowMorning);

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-card" data-reveal="">
          <div>
            <p className="eyebrow" style={{ color: "white" }}>
              BOOK A VISIT
            </p>
            <h2 id="contact-title">准备好，迎接一只香香的毛孩子</h2>
            <p>
              提前预约可以减少等待。来电告诉我们宠物品种、体重与想做的项目，我们会为你预留合适时段。
            </p>
            <label className="visit-field">
              <span>期望到店日期</span>
              <input
                type="datetime-local"
                value={expectedVisit}
                onChange={(event) => setExpectedVisit(event.target.value)}
                suppressHydrationWarning
              />
            </label>
            <div className="contact-actions">
              <a className="button" href="tel:4008880618">
                致电 400-888-0618
              </a>
              <a className="button" href="sms:4008880618">
                短信预约
              </a>
            </div>
          </div>
          <dl className="store-info">
            <div className="info-row">
              <dt>营业时间</dt>
              <dd>周一至周日 10:00–20:00</dd>
            </div>
            <div className="info-row">
              <dt>门店地址</dt>
              <dd>上海市普陀区宜川路街道陕西北路 1620 号</dd>
            </div>
            <div className="info-row">
              <dt>温馨提示</dt>
              <dd>建议到店前 2 小时避免进食</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
