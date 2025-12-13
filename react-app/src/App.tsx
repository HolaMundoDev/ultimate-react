import { useState } from "react";
import Button from "./Components/Button";
import Card, { CardBody } from "./Components/Card";
import List from "./Components/List";

function App() {
  const [data, setData] = useState(["Goku", "Tanjiro", "Chanchito feliz"]);
  // const [isLoading, setIsLoading] = useState(false);
  // const handleClick = () => setIsLoading(!isLoading);

  // const list: string[] = ["Goku", "Tanjiro", "Chanchito feliz"];

  // const handleSelect = (elemento: string) => {
  //   console.log("imprimiendo", elemento);
  // };

  // return (
  //   <Card>
  //     <CardBody title="Hola Mundo" text="El texto del componente" />
  //     {list.length !== 0 ? (
  //       <List data={list} onSelect={handleSelect} />
  //     ) : (
  //       "No hay contenido"
  //     )}
  //     <Button isLoading={isLoading} onClick={handleClick}>
  //       Hola Mundo
  //     </Button>
  //   </Card>
  // );

  const addMinion = () => setData([...data, "Minion"]);
  const delMinion = () => setData(data.slice(0, -1));

  return (
    <Card>
      <Button onClick={addMinion} isLoading={true}>Agregar</Button>
      <Button onClick={delMinion} isLoading={false}>Eliminar</Button>
      <List data={data}></List>
    </Card>
  );
}

export default App;
