import { GiPokerHand } from "react-icons/gi";
import Container from "./components/Container";
import Header from "./components/Header";
import Input from "./components/Input";

export default function App() {
  return (
    <>
      <Header title="Header">
        <GiPokerHand size="50px" />
      </Header>
      <Container>
        <Input></Input>
      </Container>
    </>
  );
}
