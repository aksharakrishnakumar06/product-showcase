// TODO 1: Declare a props type with a `name: string` field.
type Props = {
  name: string;
};

// TODO 2: Give this component a typed, destructured parameter: ({ name }: Props)
export default function Greeting({ name }: Props) {
  // TODO 3: Render {name} inside the JSX (replace the placeholder below).
  return <h2>Hello, {name}!</h2>;
}