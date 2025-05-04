import { CountriesList } from "./components/CountriesList/CountriesList";
import { FiltersBar } from "./components/FiltersBar/FiltersBar";
import { Header } from "./components/Header/Header";

const App = () => {
  return (
    <div className="app">
      <Header />
      <FiltersBar />
      <CountriesList />
    </div>
  );
};

export default App;
