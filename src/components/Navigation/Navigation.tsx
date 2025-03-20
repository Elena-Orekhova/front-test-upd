import { FC, useState, useEffect } from "react";
import "./style.scss";

export const Navigation: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navigation__container ${isScrolled ? 'navigation__container--fixed' : ''} ${isLoaded ? 'navigation__container--loaded' : ''}`}>
      <div className="navigation__wrapper">
        <nav className="navigation__navbar">
          <div className="logo">
            <div className="logo__icon">
              <img src="/svg/svg_logo.svg" alt="NFTS Logo" />
            </div>
          </div>
          
          <div className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#" className="nav__link active">
                  Discover
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Creators
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Sell
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Stats
                </a>
              </li>
            </ul>

          </div>
          <button className="connect-wallet-btn">Connect Wallet</button>
        </nav>
      </div>
    </div>
  );
};
