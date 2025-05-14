import { Container } from "../components/Container/Container";
import { CountriesList } from "../components/CountriesList/CountriesList";

export const MainPage = () => {
  return (
    <div>
      <Container>
        <CountriesList />
      </Container>
    </div>
  );
};
