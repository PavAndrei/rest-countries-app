import { Route, Routes } from "react-router-dom";
import { FiltersBar } from "./components/FiltersBar/FiltersBar";
import { Header } from "./components/Header/Header";
import { MainPage } from "./pages/MainPage";
import { CountryPage } from "./pages/CountryPage";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Header />
        <FiltersBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/country/:id" element={<CountryPage />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
