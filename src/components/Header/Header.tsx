import { FC } from "react";
import { Hero } from "../Hero/Hero";
import "./header.scss";
import { Navigation } from "../Navigation/Navigation";

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Navigation />
        <Hero />
      </div>
    </header>
  );
};
