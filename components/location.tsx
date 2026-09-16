import Image from "next/image";

export function Location() {
  return (
    <section
      className="location"
      id="location"
      aria-labelledby="location-title"
    >
      <div className="container">
        <div className="section-head" data-reveal="">
          <div>
            <p className="eyebrow">FIND US</p>
            <h2 id="location-title">带着毛孩子，轻松找到我们</h2>
          </div>
          <p>
            门店在陕西北路与澳门路交会处附近，长寿公园北侧。地图中的珊瑚色爪印，就是爪爪沐光。
          </p>
        </div>
        <div className="location-card" data-reveal="">
          <div className="location-details">
            <p className="eyebrow">STORE LOCATION</p>
            <h3>爪爪沐光宠物洗护</h3>
            <address className="location-address">
              <strong>上海市普陀区宜川路街道</strong>陕西北路 1620 号
            </address>
            <p className="location-note">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span>
                近澳门路，长寿公园北侧
                <br />
                建议提前预约，减少毛孩子等候时间
              </span>
            </p>
            <a
              className="button button-primary"
              href="https://uri.amap.com/search?keyword=%E4%B8%8A%E6%B5%B7%E5%B8%82%E6%99%AE%E9%99%80%E5%8C%BA%E5%AE%9C%E5%B7%9D%E8%B7%AF%E8%A1%97%E9%81%93%E9%99%95%E8%A5%BF%E5%8C%97%E8%B7%AF1620%E5%8F%B7"
              target="_blank"
              rel="noopener noreferrer"
            >
              打开地图导航
            </a>
          </div>
          <figure className="location-map">
            <Image
              src="/assets/store-location-map.png"
              alt="爪爪沐光宠物洗护门店位置示意图，位于陕西北路与澳门路附近、长寿公园北侧"
              width={1536}
              height={1024}
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
