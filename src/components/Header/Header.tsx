import { Hero } from "../Hero/Hero";
import { Navigation } from "../Navigation/Navigation";
import styles from "./header.module.scss";
// TODO `FC` - можно убрать, не обязательно
// TODO Вместо обычных стилей использовать модули - в этом файле будет пример использования
//- сделать так по всему проекту со стилями
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Navigation />
        <Hero />
      </div>
    </header>
  );
};
