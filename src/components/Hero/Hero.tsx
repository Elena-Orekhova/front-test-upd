import { FC } from "react";
import "./hero.scss";
// TODO: стили, а так же давай сделаем hero переиспользуемым комп
export const Hero: FC = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__content-mobile">
          <p className="hero__content-mobile-text">OVER 1M CREATORS</p>
        </div>
        <h1 className="hero__title">Discover And Create NFTs</h1>
        <p className="hero__subtitle">
          Discover, Create and Sell NFTs On Our NFT Marketplace With Over
          Thousands Of NFTs And Get a{" "}
          <span className="hero__subtitle-bold">$20 bonus.</span>
        </p>
        <div className="hero__buttons">
          <button className="hero__button hero__button--primary">
            Explore More
          </button>
          <button className="hero__button hero__button--secondary">
            Create NFT
          </button>
        </div>
        <List className="stats_wrapper">
          <ul className="stats__item">
            <li className="stats__value">430k+</li>
            <li className="stats__label">Art Works</li>
          </ul>
          <div className="stats__item">
            <span className="stats__value">159k+</span>
            <span className="stats__label">Creators</span>
          </div>
          <div className="stats__item">
            <span className="stats__value">87k+</span>
            <span className="stats__label">Collections</span>
          </div>
        </List>
      </div>
      <div className="hero__banner">
        <div className="hero__banner-wrapper">
          <Image src="/images/image_header_1.png" alt="NFT Banner" className="hero__banner-main" size="m" width={1000} height={600} />
          <Image src="/images/image_header_2.png" alt="NFT Banner Small" className="hero__banner-small" size="s" />
          <Image src="/svg/svg_points-group.svg" alt="Decoration" className="hero__banner-points" />
          <Image src="/svg/svg_arrow.svg" alt="Arrow" className="hero__banner-arrow" />
        </div>
      </div>
    </section>
  );
};
