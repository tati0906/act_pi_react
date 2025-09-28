"use client";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { full, total, setQty, remove, clear, formatCOP } = useCart();

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Tu carrito</h1>
      {full.length === 0 ? (
        <p className="text-white/70">El carrito está vacío.</p>
      ) : (
        <>
          <div className="space-y-4">
            {full.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b border-white/10 pb-4"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => setQty(item.id, item.qty - 1)}
                      className="btn btn-outline px-2"
                    >
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => setQty(item.id, item.qty + 1)}
                      className="btn btn-outline px-2"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{formatCOP(item.lineTotal)}</p>
                  <button
                    onClick={() => remove(item.id)}
                    className="text-sm text-red-400 hover:underline"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <button onClick={clear} className="btn btn-outline">
              Vaciar carrito
            </button>
            <div className="text-right">
              <p className="text-lg font-bold">
                Total: {formatCOP(total)}
              </p>
              <button className="btn btn-primary mt-2">Finalizar compra</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}