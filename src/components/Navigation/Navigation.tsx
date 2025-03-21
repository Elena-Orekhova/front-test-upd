import { FC, useState, useEffect, useRef } from "react";
import "./navigation.scss";

export const Navigation: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target as Node) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
        document.body.style.overflow = "";
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "";
  };

  return (
    <div
      className={`navigation__container ${isScrolled ? "navigation__container--fixed" : ""}`}
    >
      <div className="navigation__wrapper">
        <nav className="navigation__navbar">
          <div className="navigation__wrapper-flex">
            <div className={`logo${isMenuOpen ? " logo--active" : ""}`}>
              <img src="/svg/svg_logo.svg" alt="DiveSea Logo" />
              <span className="logo__text">DiveSea</span>
            </div>
            <button
              className={`burger-menu ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
              ref={burgerRef}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className={`nav ${isMenuOpen ? "active" : ""}`} ref={menuRef}>
              <ul className="nav__list">
                <li className="nav__item">
                  <a
                    href="#"
                    className="nav__link"
                  >
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

              <div className="nav__social-links">
                <a
                  href="#"
                  className="nav__social-link nav__social-link--instagram"
                  aria-label="Instagram"
                ></a>
                <a
                  href="#"
                  className="nav__social-link nav__social-link--linkedin"
                  aria-label="LinkedIn"
                ></a>
                <a
                  href="#"
                  className="nav__social-link nav__social-link--facebook"
                  aria-label="Facebook"
                ></a>
                <a
                  href="#"
                  className="nav__social-link nav__social-link--twitter"
                  aria-label="Twitter"
                ></a>
              </div>

              <button className="connect-wallet-btn">Connect Wallet</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
