import ProductCard from "./ProductCard";
import { Product } from "@/lib/products";

export default function Section({
  id,
  title,
  products,
}: {
  id: string;
  title: string;
  products: Product[];
}) {
   return (
    <section id={id} className="container mt-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map(p => <ProductCard key={p.id} p={p} />)}
      </div>
    </section>
  );
}
{/* Este componente que muestra nombre, descripción, precio y botón de compra */}