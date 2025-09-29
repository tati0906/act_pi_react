import "./globals.css";
import { ReactNode } from "react";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "PurpleGifts",
  description: "Creatividad sin límites · Personalización total · Calidad garantizada",
};
// Next.js usa esta constante "metadata" automáticamente para generar

export default function RootLayout({ children }: { children: ReactNode }) {
  // Este componente envuelve TODA la app, incluyendo las páginas.
  // Recibe "children", que son los componentes de cada página que se renderizan dentro.

  return (
    <html lang="es">
      {/* Etiqueta raíz del documento HTML */}
      {/* "lang='es'" indica que el idioma del contenido es español */}
      <body className="bg-[#120c25] text-white min-h-screen flex flex-col">
        {/* Cuerpo del documento y los colores*/}
        <CartProvider>
          {/* Proveedor del contexto del carrito */}
          <Navbar />
          {/* - Barra de navegación principal. */}
          <main className="flex-1">{children}</main>
          {/* - Área central de la aplicación donde se renderizan las páginas dinámicas.
            - {children} = contenido de cada página según la ruta.*/}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}