import { SpaceCarousel } from "./space-carousel";

export function Spaces() {
  return (
    <section className="spaces" id="spaces" aria-labelledby="spaces-title">
      <div className="container">
        <div className="section-head" data-reveal="">
          <div>
            <p className="eyebrow">OUR SPACE</p>
            <h2 id="spaces-title">把安心，写进每一处空间</h2>
          </div>
          <p>
            从迎宾等候到洗护造型，功能分区彼此独立又全程可见，让宠物放松，也让主人放心。
          </p>
        </div>
        <SpaceCarousel />
      </div>
    </section>
  );
}
