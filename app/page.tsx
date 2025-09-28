import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { products } from "@/lib/products";

// Si tienes un tipo definido para Product, impórtalo aquí:
// import { Product } from "@/types";

export default function Home() {
  // Si tienes el tipo Product, puedes tipar los arrays:
  // const anchetas: Product[] = products.filter(p => p.category === "Anchetas");
  const anchetas = products.filter(p => p.category === "Anchetas");
  const desayunos = products.filter(p => p.category === "Desayunos");
  const decos = products.filter(p => p.category === "Decoraciones");

  return (
    <main>
      <Hero />
      <Section id="anchetas" title="Anchetas" products={anchetas} />
      <Section id="desayunos" title="Desayunos" products={desayunos} />
      <Section id="decoraciones" title="Decoraciones" products={decos} />
    </main>
  );
}