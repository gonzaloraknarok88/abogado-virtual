import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Abogado Virtual',
  description: 'Plataforma de consulta legal con abogados verificados',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
