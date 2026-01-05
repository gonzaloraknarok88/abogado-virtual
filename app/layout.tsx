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
      <body style={{
        background: 'linear-gradient(135deg, #0066cc 0%, #0052a3 100%)',
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {children}
        </div>
      </body>
    </html>
  );
}
