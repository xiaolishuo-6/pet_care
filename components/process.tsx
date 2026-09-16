export function Process() {
  return (
    <section className="process" id="process" aria-labelledby="process-title">
      <div className="container">
        <div className="section-head" data-reveal="">
          <div>
            <p className="eyebrow">OUR PROCESS</p>
            <h2 id="process-title">四步安心洗护</h2>
          </div>
          <p>每一步都看得见、说得清，让主人放心，也让毛孩子保持好心情。</p>
        </div>
        <div className="steps">
          <article className="step" data-reveal="">
            <h3>到店沟通</h3>
            <p>确认健康情况、敏感部位与造型偏好。</p>
          </article>
          <article className="step" data-reveal="">
            <h3>毛发检测</h3>
            <p>检查皮肤、耳道、指甲与毛发打结情况。</p>
          </article>
          <article className="step" data-reveal="">
            <h3>定制洗护</h3>
            <p>匹配洗护产品，按宠物节奏温柔完成。</p>
          </article>
          <article className="step" data-reveal="">
            <h3>状态反馈</h3>
            <p>给主人同步过程，附上日常护理建议。</p>
          </article>
        </div>
      </div>
    </section>
  );
}
