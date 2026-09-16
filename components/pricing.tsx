export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <div className="section-head" data-reveal="">
          <div>
            <p className="eyebrow">SIMPLE PRICING</p>
            <h2 id="pricing-title">透明价格，按需选择</h2>
          </div>
          <p>
            以下为基础参考价，实际费用将根据体型、毛量、打结与配合程度，在服务前确认。
          </p>
        </div>
        <div className="pricing-grid">
          <article className="price-panel" data-reveal="">
            <h3>常规洗护</h3>
            <p className="panel-copy">
              包含洗澡、吹干、梳毛、耳道清洁、指甲修剪与脚底毛修剪。
            </p>
            <ul className="price-list">
              <li>
                <span>
                  <strong>小型犬</strong>
                  <small>10kg 以内</small>
                </span>
                <span className="price">¥88 起</span>
              </li>
              <li>
                <span>
                  <strong>中型犬</strong>
                  <small>10–20kg</small>
                </span>
                <span className="price">¥138 起</span>
              </li>
              <li>
                <span>
                  <strong>大型犬</strong>
                  <small>20kg 以上</small>
                </span>
                <span className="price">¥218 起</span>
              </li>
              <li>
                <span>
                  <strong>短毛猫 / 长毛猫</strong>
                  <small>单猫独立护理</small>
                </span>
                <span className="price">¥128 / 168 起</span>
              </li>
            </ul>
          </article>
          <article className="care-panel" data-reveal="">
            <p className="eyebrow" style={{ color: "var(--mint)" }}>
              FIRST VISIT
            </p>
            <h3>第一次来也不怕</h3>
            <p className="panel-copy">
              我们会先熟悉气味与环境，再慢慢进入洗护流程，不催促、不强迫。
            </p>
            <ul className="care-list">
              <li>到店前一对一沟通习惯与禁忌</li>
              <li>免费毛发与皮肤基础检测</li>
              <li>洗护后发送护理记录与居家建议</li>
            </ul>
            <a className="button" href="#contact">
              预约初次体验
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
