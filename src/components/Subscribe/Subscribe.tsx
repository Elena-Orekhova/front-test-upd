import "./subscribe.scss";

export const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="subscribe__container">
        <div className="subscribe__content">
          <Text className="subscribe__title">Create and Sell NFTs</Text>
          <Text className="subscribe__description">
            World's Largest NFT Place
          </Text>
          <div className="subscribe__buttons">
            <Button>Explore More</Button>
            <Button>Sell Artwork</Button>
          </div>
        </div>
        <div className="subscribe__image">
          <div className="subscribe__image-container">
            <Image src="/images/image_subscribe.png" alt="NFT Artwork" />
          </div>
        </div>
      </div>
    </section>
  );
};
