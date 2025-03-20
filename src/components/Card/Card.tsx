import { FC, useState, useEffect } from "react";
import "./style.scss";

interface CardProps {
  image: string;
  title: string;
  current: number;
}

export const Card: FC<CardProps> = ({ image, title, current }) => {
  const [timeLeft, setTimeLeft] = useState<string>("");

  const calculateTimeUntilEndOfDay = () => {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    
    const diff = endOfDay.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    
    return `${formattedHours}h ${formattedMinutes}m ${formattedSeconds}s`;
  };

  useEffect(() => {
    setTimeLeft(calculateTimeUntilEndOfDay());
    
    const timeTimer = setInterval(() => {
      setTimeLeft(calculateTimeUntilEndOfDay());
    }, 1000);
    
    return () => {
      clearInterval(timeTimer);
    };
  }, []);

  return (
    <div className="card">
      <div className="card__timer-wrap">
        <span className="card__timer">{timeLeft}</span>
      </div>
      <div className="card__image-wrap">
        <img src={image} alt={title} className="card__image" />
      </div>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <div className="card__price-container">
          <div className="card__price-info">
            <span className="card__price-label">Current bid</span>
            <div className="card__price-vector-wrap">
              <img
                src="/svg/svg_vector.svg"
                alt="vector"
                className="card__price-vector"
              />
              <span className="card__price-value">{current}</span>
            </div>
          </div>
          <button className="card__button">Place BID</button>
        </div>
      </div>
    </div>
  );
};
