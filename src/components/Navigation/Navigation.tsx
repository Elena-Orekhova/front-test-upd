import { FC, useState, useEffect, useRef } from "react";
import cl from "classnames";
// TODO про модули не забываем
import "./navigation.scss";
import { Link } from "../Link/Link";
// TODO - не нужно типизировать компонент, где это не нужно, если пропсов нет, мы его не типизируем
export const Navigation: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // TODO не правлиьный тип - должен быть  HTMLDivElement | null
  const menuRef = useRef<HTMLDivElement | null>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  // TODO - сделай просто position sticky, если элемент начал скролиться.
  // Делаем хук отдельный const isScrool =  isScrolled() // true | false он вернет True, если у тебя глобальный скролл проскролился.
  // И по этой переменной мы ставим position sticky а не fixed тогда все должно быть плавно, а не как сейчас
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1); // В хуке поставь 1
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : ""; // Вот так вообще никогда не делай, это грубая ошибка, мы не можем изменять состояние на прямую )
  };

  return (
    <div
      className={cl(styles.navigation__container, {
        __fixed: isScrolled,
      })}
      // Установи себе сюда либу classnames и используй ее, чтобы делать такие темы
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
            {/* ВЫнеси в отдельнй компонент, сделай константы и замапь их */}
            <div className={`nav ${isMenuOpen ? "active" : ""}`} ref={menuRef}>
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#" className="nav__link">
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
                 <Link/></>
                </li>
              </ul>
              {/* Контснтанты и мапим */}
              <div className="nav__social-links">
                <a
                  href="#"
                  className="nav__social-link nav__social-link--instagram"
                  aria-label="Instagram"
                ></a>
                <Link
                  href="#"
                  className="nav__social-link"
                  ariaLabel="Instagram"
                  imageSrc="/svg/svg_instagram.svg"
                  imageAlt="Instagram"
                />
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
              {/* Сделай компонент кнопки и потом используй, не надо каждый раз прокидывать стили так */}
              <button className="connect-wallet-btn">Connect Wallet</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
