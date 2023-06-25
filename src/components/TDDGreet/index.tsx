type Props = {
  name?: string;
};

function Greet({ name }: Props) {
  return <div>Hello {name}</div>;
}

export default Greet;
