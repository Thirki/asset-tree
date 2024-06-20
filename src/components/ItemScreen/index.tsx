import { Container } from "./styles";
import { ItemContent, ItemFooter } from "./components";
import { Header } from "./components/Header";

export const ItemScreen = () => {
  return (
    <Container>
      <Header />
      <ItemContent />
      <ItemFooter />
    </Container>
  );
};
