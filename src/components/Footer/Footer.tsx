import { FC } from "react";
import "./footer.scss";
import { LogoIcon } from "../../icons";

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__main">
          <div className="footer__logo">
            <div className="footer__logo-icon">
              <LogoIcon />
            </div>
            <span className="footer__logo-text">DiveSea</span>
          </div>
          <div className="footer__menu">
            <Link></Link>
            <a href="#" className="footer__link">
              Terms & Conditions
            </a>
            <a href="#" className="footer__link">
              About Us
            </a>
            <a href="#" className="footer__link">
              Contact
            </a>
          </div>
        </div>
        <div className="footer__divider"></div>
        <div className="footer__bottom">
          <div className="footer__copyright">{new Date().getFullYear()}</div>
          <div className="footer__social-links">
            <a
              href="#"
              className="footer__social-link footer__social-link--instagram"
            ></a>
            <a
              href="#"
              className="footer__social-link footer__social-link--linkedin"
            ></a>
            <a
              href="#"
              className="footer__social-link footer__social-link--facebook"
            ></a>
            <a
              href="#"
              className="footer__social-link footer__social-link--twitter"
            ></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
