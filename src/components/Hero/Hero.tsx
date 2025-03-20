import { FC } from "react";
import "./style.scss";

export const Hero: FC = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Discover And Create NFTs</h1>
        <p className="hero__subtitle">
          Discover, Create and Sell NFTs On Our NFT Marketplace With Over
          Thousands Of NFTs And Get a $20 bonus.
        </p>
        <div className="hero__buttons">
          <button className="hero__button hero__button--primary">
            Explore More
          </button>
          <button className="hero__button hero__button--secondary">
            Create NFT
          </button>
        </div>
        <div className="stats">
          <div className="stats__item">
            <span className="stats__value">430k+</span>
            <span className="stats__label">Art Works</span>
          </div>
          <div className="stats__item">
            <span className="stats__value">159k+</span>
            <span className="stats__label">Creators</span>
          </div>
          <div className="stats__item">
            <span className="stats__value">87k+</span>
            <span className="stats__label">Collections</span>
          </div>
        </div>
      </div>
      <div className="hero__banner">
        <div className="hero__banner-wrapper">
          <img
            src="/images/image_header_1.png"
            alt="NFT Banner"
            className="hero__banner-main"
          />
          <img
            src="/images/image_header_2.png"
            alt="NFT Banner Small"
            className="hero__banner-small"
          />
          <img
            src="/svg/svg_points-group.svg"
            alt="Decoration"
            className="hero__banner-points"
          />
          <img
            src="/svg/svg_arrow.svg"
            alt="Arrow"
            className="hero__banner-arrow"
          />
        </div>
      </div>
    </section>
  );
}; 