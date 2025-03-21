import { Header } from "./components/Header/Header";
import { Cards } from "./components/Cards/Cards";
import { Subscribe } from "./components/Subscribe/Subscribe";
import { Footer } from "./components/Footer/Footer";

function App() {
  // TODO: Сделай page и сюда вставь ее, в App мы храним только провайдеры и конфигруации
  return (
    <>
      <Header />
      <Cards />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
