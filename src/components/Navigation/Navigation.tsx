import { FC, useState, useEffect } from "react";
import "./style.scss";

export const Navigation: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navigation__container ${isScrolled ? "navigation__container--fixed" : ""}`}
    >
      <div className="navigation__wrapper">
        <nav className="navigation__navbar">
          <div className="navigation__wrapper-flex">
            <div className="logo">
              <img src="/svg/svg_logo.svg" alt="NFTS Logo" />
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
          </div>
          <button className="connect-wallet-btn">Connect Wallet</button>
        </nav>
      </div>
    </div>
  );
};
