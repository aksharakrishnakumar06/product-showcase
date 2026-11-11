import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      {/* TODO: Pass a name prop to Greeting */}
      <Greeting name="Student" />

      <div className="product-list">
        {/* TODO: Render ProductCard twice with different props */}
        <ProductCard title="Wireless Mouse" price={29} inStock={true} />
        <ProductCard title="Mechanical Keyboard" price={89} inStock={false} />
      </div>
    </main>
  );
}