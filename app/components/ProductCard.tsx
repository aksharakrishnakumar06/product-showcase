import PriceTag from "./PriceTag";

// TODO 1: Declare a props type with:
//         title: string
//         price: number
//         inStock: boolean
type Props = {
  title: string;
  price: number;
  inStock: boolean;
};

// TODO 2: Give this component a typed, destructured parameter: ({ title, price, inStock }: Props)
export default function ProductCard({ title, price, inStock }: Props) {
  return (
    <div className="product-card">
      {/* TODO 3: Render title */}
      <h3>{title}</h3>

      {/* TODO 4: Render PriceTag component passing the price prop */}
      <PriceTag amount={price} />

      {/* TODO 5: Render stock status based on inStock prop */}
      <p>{inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}