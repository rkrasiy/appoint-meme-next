import './globals.css'

export const metadata = {
  title: 'Cita previa',
  description: 'Pide tu cita previa',
}

export default function RootLayout({ children }) {
  return (
    <html className="m-5 rounded-xl shadow-xl bg-gray-100" lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}
