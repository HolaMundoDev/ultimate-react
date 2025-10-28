import Card, { CardBody } from "./Components/Card";
import List from "./Components/List";

function App() {
  const list: string[] = ["Goku", "Tanjiro", "Chanchito feliz"];

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };

  return (
    <Card>
      <CardBody title="Hola Mundo" text="El texto del componente" />
      {list.length !== 0 ? (
        <List data={list} onSelect={handleSelect} />
      ) : (
        "No hay contenido"
      )}
    </Card>
  );
}

export default App;
