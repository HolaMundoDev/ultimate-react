import Card, { CardBody } from "./Components/Card";
import List from "./Components/List";

function App() {
  const list = ["Goku", "Tanjiro", "Eren"];
  return (
    <Card>
      <CardBody title="Hola Mundo" text="El texto del componente" />
      <List data={list} />
    </Card>
  );
}

export default App;
