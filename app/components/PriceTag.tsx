// TODO 1: Declare a props type with an `amount: number` field.
type Props = {
  amount: number;
};

// TODO 2: Give this component a typed, destructured parameter: ({ amount }: Props)
export default function PriceTag({ amount }: Props) {
  // TODO 3: Render the amount inside the JSX with curly braces, e.g. ${amount}
  return <span>${amount}</span>;
}