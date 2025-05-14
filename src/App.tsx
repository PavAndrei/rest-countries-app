import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { MainPage } from "./pages/MainPage";
import { CountryPage } from "./pages/CountryPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Main } from "./components/Main/Main";

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/country/:id" element={<CountryPage />} />
          </Routes>
        </Main>
      </Provider>
    </div>
  );
};

export default App;
