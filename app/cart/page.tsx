"use client";
// Esto indica a Next.js que este componente es del lado del cliente.
// Es obligatorio porque se usan hooks (useCart) y eventos (onClick).

import { useCart } from "@/context/CartContext";
// Importa el hook personalizado que maneja el estado global del carrito.
// Permite acceder a productos y funciones como agregar, quitar o formatear precios.

export default function CartPage() {
  const { full, total, setQty, remove, clear, formatCOP } = useCart();
  // Extraemos valores y funciones del contexto del carrito:
  // - full: lista de productos en el carrito.
  // - total: precio total de todos los productos.
  // - setQty: cambia la cantidad de un producto específico.
  // - remove: elimina un producto del carrito.
  // - clear: vacía el carrito completo.
  // - formatCOP: helper para mostrar valores en pesos colombianos.

  return (
    <div className="container py-10">
      {/* Contenedor principal de la página del carrito*/}

      <h1 className="text-3xl font-bold mb-6">Tu carrito</h1>
      {/* Aquí usamos un renderizado condicional con operador ternario:
          - Si el carrito está vacío (full.length === 0), se muestra un mensaje.
          - Si el carrito tiene productos, se renderiza el bloque del "else". */}
      {full.length === 0 ? (

        // Mensaje que aparece si el carrito no tiene productos
      

        <p className="text-white/70">El carrito está vacío.</p>
      ) : (
        // Si hay productos, se ejecuta este bloque (que veremos después).
      
        <>
          <div className="space-y-4">
            {/* Contenedor general para la lista de productos */}


            {full.map((item) => (
              <div
                // Iteramos sobre el array "full" (todos los productos del carrito).
                // Por cada producto ("item") se renderiza un bloque con su info.

                key={item.id}
                className="flex items-center gap-4 border-b border-white/10 pb-4"
              >
                {/* Contenedor de cada producto individual */}

                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  {/* Columna de información del producto */}
                
                  <h3 className="font-semibold">{item.name}</h3>
                  {/* Nombre del producto */}
                
                  <p className="text-sm text-white/70">{item.description}</p>
                  {/* Descripción del producto */}
                  <div className="flex items-center gap-2 mt-2">
                    {/* Controles de cantidad */}

                    <button
                      onClick={() => setQty(item.id, item.qty - 1)}
                      className="btn btn-outline px-2"
                    >
                      {/* Botón para disminuir la cantidad */}

                      -
                    </button>
                    <span>{item.qty}</span>
                    {/* boton Cantidad actual del producto en el carrito */}

                    <button
                      onClick={() => setQty(item.id, item.qty + 1)}
                      className="btn btn-outline px-2"
                    >
                      {/* Botón para aumentar la cantidad */}

                      +
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  {/* Columna derecha: subtotal y botón eliminar */}
                  <p className="font-semibold">{formatCOP(item.lineTotal)}</p>
                  {/* Subtotal del producto (precio unitario x cantidad) */}
                  <button
                    onClick={() => remove(item.id)}
                    className="text-sm text-red-400 hover:underline"
                  >
                    {/* Botón para eliminar este producto del carrito */}
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