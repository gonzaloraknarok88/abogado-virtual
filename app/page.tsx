'use client';

export default function Home() {
  return (
    <main style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '20px',
      boxSizing: 'border-box',
    }}>
      <div style={{
        textAlign: 'center',
        color: 'white',
        maxWidth: '600px',
      }}>
        <h1 style={{
          fontSize: '48px',
          marginBottom: '20px',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        }}>
          ⚖️ Abogado Virtual
        </h1>
        
        <p style={{
          fontSize: '20px',
          marginBottom: '40px',
          opacity: 0.95,
          lineHeight: '1.6',
        }}>
          Plataforma de consulta legal con abogados verificados y especializados
        </p>
        
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          padding: '30px',
          borderRadius: '10px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          marginBottom: '30px',
        }}>
          <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>
            Sistema de Gestión de Leads
          </h2>
          <p style={{ marginBottom: '15px', opacity: 0.9 }}>
            Base de datos integrada con 120+ leads de múltiples plataformas
          </p>
          <p style={{ opacity: 0.85, fontSize: '14px' }}>
            LinkedIn • TikTok • X • Google Ads • Facebook • Instagram
          </p>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <a href="/api/leads" style={{
            padding: '12px 30px',
            backgroundColor: 'white',
            color: '#0066cc',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
          }}
          >
            Ver API de Leads
          </a>
        </div>
        
        <div style={{
          marginTop: '50px',
          paddingTop: '30px',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          fontSize: '12px',
          opacity: 0.7,
        }}>
          <p>✓ API Integrada • ✓ Google Sheets • ✓ Base de 120+ Leads • ✓ Vercel Deployment</p>
          <p style={{ marginTop: '10px' }}>Desarrollado por: Gonzalo Raknarok | Enero 2026</p>
        </div>
      </div>
    </main>
  );
}
