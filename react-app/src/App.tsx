import Card, { CardBody } from "./Components/Card";
import List from "./Components/List";

function App() {
  const list = ["Goku", "Tanjiro", "Eren"];

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };

  const handleSelect2 = (elemento: string) => {
    console.log("mostrando", elemento);
  };

  return (
    <Card>
      <CardBody title="Hola Mundo" text="El texto del componente" />
      <List data={list} onSelect={handleSelect} />
      <List data={list} onSelect={handleSelect2} />
    </Card>
  );
}

export default App;
