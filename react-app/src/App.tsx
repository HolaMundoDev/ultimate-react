import Card, { CardBody } from "./Components/Card";
import List from "./Components/List";

function App() {
  const list: string[] = [];

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };

  return (
    <Card>
      {/* {"" && "string vacio"}
      {undefined && "indefinido"}
      {null && "nulo"}
      {false && "falso"}
      {0 && "0"} */}
      {list.length !== 0 && "mi lista"}
      <CardBody title="Hola Mundo" text="El texto del componente" />
      <List data={list} onSelect={handleSelect} />
    </Card>
  );
}

export default App;
