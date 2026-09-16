import Image from "next/image";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-card">
          <Image
            className="hero-image"
            src="/assets/pet-spa-hero.png"
            alt="刚完成洗护、戴着珊瑚色围巾的奶油色小狗"
            width={1536}
            height={1024}
            preload
          />
          <span className="bubble one" aria-hidden="true"></span>
          <span className="bubble two" aria-hidden="true"></span>
          <span className="bubble three" aria-hidden="true"></span>
          <div className="hero-content">
            <p className="eyebrow">温柔洗护 · 预约制服务</p>
            <h1 id="hero-title">
              把毛孩子，
              <br />
              洗成一朵<span>云。</span>
            </h1>
            <p className="hero-copy">
              犬猫分区、独立消毒、全程可见。根据毛发与皮肤状态定制洗护方案，让每一次清洁都舒适、安心。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                立即预约洗护
              </a>
              <a className="button button-secondary" href="#services">
                看看服务项目
              </a>
            </div>
            <p className="hero-note">
              <span aria-hidden="true">✓</span> 新客到店享免费毛发检测
            </p>
          </div>
        </div>
        <div className="trust-strip" aria-label="门店特色">
          <div className="trust-item">
            <span className="trust-icon" aria-hidden="true">
              01
            </span>
            <span>
              <strong>犬猫分区</strong>
              <small>减少紧张与交叉接触</small>
            </span>
          </div>
          <div className="trust-item">
            <span className="trust-icon" aria-hidden="true">
              02
            </span>
            <span>
              <strong>一客一消毒</strong>
              <small>工具与浴巾独立清洁</small>
            </span>
          </div>
          <div className="trust-item">
            <span className="trust-icon" aria-hidden="true">
              03
            </span>
            <span>
              <strong>全程可见</strong>
              <small>透明操作，更放心</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
