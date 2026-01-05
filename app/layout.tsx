import type { Metadata } from 'next';
import './globals.css';
import Navigation from './components/Navigation';

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
      <body className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 min-h-screen">
        <div className="max-w-md mx-auto bg-gradient-to-b from-blue-900 to-blue-800 min-h-screen relative">
          <div className="pb-24">
            {children}
          </div>
          <Navigation />
        </div>
      </body>
    </html>
  );
}
