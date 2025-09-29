"use client";
// Indica que este componente se ejecuta en el cliente (no en el servidor).

import { useCart } from "@/context/CartContext";
// Hook personalizado para manejar el carrito (añadir, eliminar, etc).

import { formatCOP } from "@/utils/currency";
import { Product } from "@/lib/products";

export default function ProductCard({ p }: { p: Product }) {
  const { add } = useCart();
  // → permite añadir un producto al carrito.
  return (
    <div className="card flex flex-col overflow-hidden hover:scale-[1.02] transition">
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold">{p.name}</h3>
        <p className="text-purple-200 text-sm mt-1 line-clamp-2">
          {p.description}
        </p>
        {/* Este bloque arma la estructura visual del producto dentro de una tarjeta. */}
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-purple-300 font-semibold">
            {formatCOP(p.price)}
          </span>
          {/* Precio del producto */}
          <button
            className="btn btn-primary"
            onClick={() => add(p.id, 1)}
          > {/* Botón de compra */}
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
} 