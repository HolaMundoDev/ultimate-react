import { MouseEvent, useState } from "react";

type Props = {
  data: string[];
};

const List = ({ data }: Props) => {
  const [index, setIndex] = useState(1);
  const handleClick = (i: number) => {
    setIndex(i);
  };

  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        <li
          onClick={() => handleClick(i)}
          className={`list-group-item ${index == i ? "active" : ""}`}
          key={elemento}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
};

export default List;
