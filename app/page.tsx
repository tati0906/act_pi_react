import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { products } from "@/lib/products";


export default function Home() {
  const anchetas = products.filter(p => p.category === "Anchetas");
  const desayunos = products.filter(p => p.category === "Desayunos");
  const decos = products.filter(p => p.category === "Decoraciones");
  // Filtra todos los productos cuya categoría sea "Anchetas,desayunos,decoraciones"
  return (
    <main>
      <Hero />
      {/* Hero Section: banner principal de bienvenida */}
      <Section id="anchetas" title="Anchetas" products={anchetas} />
      <Section id="desayunos" title="Desayunos" products={desayunos} />
      <Section id="decoraciones" title="Decoraciones" products={decos} />
    </main>
  );
} {/* Sección de productos "Anchetas,desayunos,decoraciones"
        - id="anchetas,desayunos,decoraciones": permite anclar enlaces a esta parte de la página
        - title="Anchetas,desayunos,decoraciones": título visible de la sección
        - products={anchetas,desayunos,decoraciones}: pasa la lista filtrada de productos */}