export function Services() {
  return (
    <section
      className="services"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="container">
        <div className="section-head" data-reveal="">
          <div>
            <p className="eyebrow">OUR SERVICES</p>
            <h2 id="services-title">洗得干净，也洗得舒服</h2>
          </div>
          <p>
            从基础清洁到造型护理，每个步骤都按宠物的毛发类型、皮肤状态与情绪节奏调整。
          </p>
        </div>
        <div className="service-grid">
          <article className="service-card" data-reveal="">
            <span className="service-number">01</span>
            <h3>元气基础洗护</h3>
            <p>梳毛、清洁、护毛、吹干、基础修剪，一次完成日常清爽。</p>
            <div className="service-meta">
              <span>约 60–90 分钟</span>
              <span>¥88 起</span>
            </div>
          </article>
          <article className="service-card" data-reveal="">
            <span className="service-number">02</span>
            <h3>精致美容造型</h3>
            <p>根据脸型、体态与生活习惯，修剪自然耐看的专属造型。</p>
            <div className="service-meta">
              <span>约 2–3 小时</span>
              <span>¥168 起</span>
            </div>
          </article>
          <article className="service-card" data-reveal="">
            <span className="service-number">03</span>
            <h3>SPA 深层护理</h3>
            <p>针对干燥、打结与换毛期，补水顺毛，舒缓敏感肌肤。</p>
            <div className="service-meta">
              <span>加时约 30 分钟</span>
              <span>+¥68 起</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
