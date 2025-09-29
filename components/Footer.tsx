export default function Footer() {
  return (
    <footer className="mt-16 border-t border-purple-700/40 bg-purple-950/30">
      <div className="container py-10 grid gap-6 md:grid-cols-3 items-center">
        {/* Contenedor interno con grid para organizar el contenido */}
        <div className="space-y-2">
          {/* Primera columna del footer */}
          <h3 className="text-lg font-semibold">Aurum</h3>
          {/* Nombre o logotipo de la marca */}
          <p className="text-purple-200 text-sm">
            Creatividad sin límites · Personalización total · Calidad garantizada
          </p>
          {/* Lema o frase de identidad de la empresa */}
        </div>
        <div className="text-sm text-purple-300">
          <p className="mb-1">
            Medellin, Colombia · Entregas puntuales y responsables
          </p>
          <p>
            © {new Date().getFullYear()} PurpleGifts. Todos los derechos
            reservados.
          </p>
        </div>
        {/* - {new Date().getFullYear()} = obtiene dinámicamente el año actual
      */}

        <div className="flex gap-3 justify-start md:justify-end">
          <a
            href="https://www.instagram.com/aurumdecoraciones?igsh=eTZvdXNnMjlwajVy"
            target="_blank"
            className="btn btn-outline"
          > {/*link que lleva a la pagina oficial del emprendimiento*/}
            Instagram
          </a>
          <a
            href="https://wa.me/message/PO35IBX224MYE1"
            target="_blank"
            className="btn btn-primary"
          >{/*link que lleva al numero oficial ndel emprendimiento*/}
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}