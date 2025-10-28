type Props = {
  data: string[];
};

const List = ({ data }: Props) => {
  return (
    <ul className="list-group">
      {data.map((elemento) => (
        <li className="list-group-item" key={elemento}>
          {elemento}
        </li>
      ))}
    </ul>
  );
};

export default List;
