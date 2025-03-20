import { FC } from "react";
import "./style.scss";

export const Subscribe: FC = () => {
  return (
    <section className="subscribe">
      <div className="subscribe__container">
        <div className="subscribe__content">
          <h2 className="subscribe__title">Create and Sell NFTs</h2>
          <p className="subscribe__description">World's Largest NFT Place</p>
          <div className="subscribe__buttons">
            <button className="subscribe__button subscribe__button--primary">Explore More</button>
            <button className="subscribe__button subscribe__button--secondary">Sell Artwork</button>
          </div>
        </div>
        <div className="subscribe__image">
          <div className="subscribe__image-container">
            <img src="/images/image_subscribe.png" alt="NFT Artwork" className="subscribe__image-main" />
          </div>
        </div>
      </div>
    </section>
  );
};

