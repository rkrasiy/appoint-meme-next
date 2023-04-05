import './globals.css'

export const metadata = {
  title: 'Cita previa',
  description: 'Pide tu cita previa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}
