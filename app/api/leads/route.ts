import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // Configurar autenticación con Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: 'service_account',
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Obtener datos del Google Sheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Hoja 1!A:J',
    });

    const rows = response.data.values || [];
    const headers = rows[0] || [];
    const data = rows.slice(1).map((row: any[]) => {
      const lead: Record<string, any> = {};
      headers.forEach((header: string, index: number) => {
        lead[header] = row[index] || '';
      });
      return lead;
    });

    return NextResponse.json({
      success: true,
      total: data.length,
      leads: data,
    });
  } catch (error) {
    console.error('Error al conectar con Google Sheets:', error);
    return NextResponse.json(
      { success: false, error: 'Error al obtener los leads' },
      { status: 500 }
    );
  }
}
