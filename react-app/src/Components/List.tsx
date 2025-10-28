import { MouseEvent } from "react";

type Props = {
  data: string[];
};

const List = ({ data }: Props) => {
  const handleClick = (e: string) => {
    console.log(e);
  };

  return (
    <ul className="list-group">
      {data.map((elemento) => (
        <li
          onClick={() => handleClick(elemento)}
          className="list-group-item"
          key={elemento}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
};

export default List;
