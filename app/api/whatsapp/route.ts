import { NextResponse } from "next/server";
// Importamos NextResponse desde el módulo "next/server".
// NextResponse nos permite crear respuestas HTTP de manera sencilla
// en los controladores de rutas (route handlers) de Next.js.


export async function GET() {
// Definimos y exportamos la función asincrónica GET.
// Next.js detecta esta función automáticamente como el manejador
// de solicitudes HTTP de tipo GET para esta ruta.

  return NextResponse.json({ ok: true, message: "API funcionando con TS" });
}
  // Retornamos una respuesta en formato JSON utilizando NextResponse.json().
  // Este helper convierte el objeto en una respuesta HTTP con el encabezado
  // Content-Type: application/json y el cuerpo en JSON.

  // ok: true,Campo de control que indica que la petición fue exitosa.
  //  message: Mensaje de prueba que confirma que la API está activa.