"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { full, total, formatCOP } = useCart();
  const count = full.reduce((a, i) => a + i.qty, 0);

  return (
    <header className="sticky top-0 z-50 bg-[#120c25]/70 backdrop-blur border-b border-white/10">
      <div className="container py-4 flex items-center gap-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-primary-300">Purple</span>Gifts
        </Link>
        {/* Encabezado principal del sitio (Navbar) */}
        <nav className="ml-auto flex items-center gap-6 text-sm">
          <Link href="/#anchetas" className="hover:text-primary-200">Anchetas</Link>
          <Link href="/#desayunos" className="hover:text-primary-200">Desayunos</Link>
          <Link href="/#decoraciones" className="hover:text-primary-200">Decoraciones</Link>
           {/* Enlaces de navegación internos a secciones de la página */}
          <Link href="/cart" className="btn btn-outline">
            Carrito · {count} · {formatCOP(total)}
          </Link>
          {/* Botón especial para ir al carrito */}
        </nav>
      </div>
    </header>
  );
}
