import Link from "next/link";

export default function Hero() {
  return (
    <section className="container pt-12 pb-10">
      {/* "container": centra y limita el ancho del contenido */}
      {/* "pt-12 pb-10": padding superior (12) e inferior (10) para dar respiro */}

      <div className="card p-8 md:p-12 relative overflow-hidden">
        {/* "card": clase personalizada que aplica fondo, bordes y sombra */}
        {/* "p-8 md:p-12": padding interno que aumenta en pantallas medianas */}
        {/* "relative": permite posicionar elementos absolutos dentro */}
        {/* "overflow-hidden": oculta lo que se salga del borde redondeado */}

        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-purple-600/30 blur-3xl" />
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          Detalles que enamoran ✨
        </h1>
         {/* Este div crea un círculo púrpura difuminado en la esquina superior derecha */}
        <p className="text-purple-100 max-w-2xl">
          Diseños temáticos, toque artesanal y personalización total para
          sorprender en cualquier ocasión.
        </p>
          {/* Título principal del hero */}
        <div className="mt-6 flex gap-3">
          <Link href="#desayunos" className="btn btn-primary">
            Explorar productos
          </Link>
          {/* Botón para explorar productos (lleva a la sección "Desayunos") */}
          <Link href="/cart" className="btn btn-outline">
            Ver carrito
          </Link>
        </div>
        <div className="mt-6 flex gap-2 flex-wrap">
          <span className="badge">Calidad en cada producto</span>
          <span className="badge">Diseños temáticos</span>
          <span className="badge">Versatilidad</span>
        </div>
      </div>
      {/* grupo de etiquetas */}
    </section>
  );
}