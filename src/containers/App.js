import Card from "../components/Cards";
import Footer from "../components/FooterContainer";
import Title from "../components/Title";
import { ContainerAll, Header } from "../styles/styled";

function App() {
  return (
    <ContainerAll className="App">
      <Header className="App-header">
        <Title></Title>
      </Header>
      <main>
        <Card countdownTimestamp={1655199900000}></Card>
      </main>
      <Footer></Footer>
    </ContainerAll>
  );
}

export default App;
