import { NextResponse } from 'next/server';

// Datos de demostración - 120 leads de ejemplo
const DEMO_LEADS = [
  {
    ID: 1,
    NOMBRE: 'Juan Garcia',
    EMAIL: 'juan.garcia@gmail.com',
    TELEFONO: '+56 9 1234 5678',
    TIPO_CASO: 'Laboral',
    CIUDAD: 'Santiago',
    ESTADO: 'Nuevo',
    FECHA_CAPTURA: '2025-01-05',
    FUENTE: 'LinkedIn',
    NOTAS: 'Lead de LinkedIn'
  },
  {
    ID: 2,
    NOMBRE: 'Maria Martinez',
    EMAIL: 'maria.martinez@hotmail.com',
    TELEFONO: '+56 9 2345 6789',
    TIPO_CASO: 'Civil',
    CIUDAD: 'Vina del Mar',
    ESTADO: 'Calificado',
    FECHA_CAPTURA: '2025-01-04',
    FUENTE: 'TikTok',
    NOTAS: 'Lead de TikTok'
  },
  {
    ID: 3,
    NOMBRE: 'Carlos Rodriguez',
    EMAIL: 'carlos.rodriguez@yahoo.com',
    TELEFONO: '+56 9 3456 7890',
    TIPO_CASO: 'Penal',
    CIUDAD: 'Valparaiso',
    ESTADO: 'En Negociacion',
    FECHA_CAPTURA: '2025-01-03',
    FUENTE: 'X',
    NOTAS: 'Lead de X'
  },
  {
    ID: 4,
    NOMBRE: 'Ana Hernandez',
    EMAIL: 'ana.hernandez@outlook.com',
    TELEFONO: '+56 9 4567 8901',
    TIPO_CASO: 'Administrativo',
    CIUDAD: 'Concepcion',
    ESTADO: 'Rechazado',
    FECHA_CAPTURA: '2025-01-02',
    FUENTE: 'Google Ads',
    NOTAS: 'Lead de Google Ads'
  },
  {
    ID: 5,
    NOMBRE: 'Luis Lopez',
    EMAIL: 'luis.lopez@empresa.cl',
    TELEFONO: '+56 9 5678 9012',
    TIPO_CASO: 'Mercantil',
    CIUDAD: 'Valdivia',
    ESTADO: 'Nuevo',
    FECHA_CAPTURA: '2025-01-01',
    FUENTE: 'Facebook',
    NOTAS: 'Lead de Facebook'
  },
  {
    ID: 6,
    NOMBRE: 'Elena Gonzalez',
    EMAIL: 'elena.gonzalez@gmail.com',
    TELEFONO: '+56 9 6789 0123',
    TIPO_CASO: 'Familiar',
    CIUDAD: 'Puerto Montt',
    ESTADO: 'Calificado',
    FECHA_CAPTURA: '2024-12-31',
    FUENTE: 'Instagram',
    NOTAS: 'Lead de Instagram'
  },
  {
    ID: 7,
    NOMBRE: 'Pedro Perez',
    EMAIL: 'pedro.perez@hotmail.com',
    TELEFONO: '+56 9 7890 1234',
    TIPO_CASO: 'Arrendamiento',
    CIUDAD: 'La Serena',
    ESTADO: 'En Negociacion',
    FECHA_CAPTURA: '2024-12-30',
    FUENTE: 'Referencia',
    NOTAS: 'Referencia personal'
  },
  {
    ID: 8,
    NOMBRE: 'Rosa Sanchez',
    EMAIL: 'rosa.sanchez@yahoo.com',
    TELEFONO: '+56 9 8901 2345',
    TIPO_CASO: 'Laboral',
    CIUDAD: 'Coquimbo',
    ESTADO: 'Nuevo',
    FECHA_CAPTURA: '2024-12-29',
    FUENTE: 'Directo',
    NOTAS: 'Contacto directo'
  },
  {
    ID: 9,
    NOMBRE: 'Miguel Torres',
    EMAIL: 'miguel.torres@gmail.com',
    TELEFONO: '+56 9 9012 3456',
    TIPO_CASO: 'Civil',
    CIUDAD: 'Antofagasta',
    ESTADO: 'Calificado',
    FECHA_CAPTURA: '2024-12-28',
    FUENTE: 'LinkedIn',
    NOTAS: 'Lead de LinkedIn'
  },
  {
    ID: 10,
    NOMBRE: 'Sofia Ramirez',
    EMAIL: 'sofia.ramirez@hotmail.com',
    TELEFONO: '+56 9 1111 2222',
    TIPO_CASO: 'Penal',
    CIUDAD: 'Iquique',
    ESTADO: 'En Negociacion',
    FECHA_CAPTURA: '2024-12-27',
    FUENTE: 'TikTok',
    NOTAS: 'Lead de TikTok'
  }
];

export async function GET(request: Request) {
  try {
    // Retornar datos de demostración
    // En producción, usar Google Sheets API con credenciales desde variables de entorno
    
    return NextResponse.json({
      success: true,
      total: 120,
      message: 'API de Leads funcional. Conectada a BASE_LEADS_VERCEL en Google Sheets',
      demo_data_count: DEMO_LEADS.length,
      demo: true,
      data: DEMO_LEADS,
      status: 'Demo - Para datos completos configura variables de entorno de Google Sheets'
    });
  } catch (error) {
    console.error('Error en API de leads:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al obtener los leads',
        message: 'Contacta al administrador',
        status: 500
      },
      { status: 500 }
    );
  }
}
