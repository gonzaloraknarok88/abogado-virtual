'use client';

import { useState, useEffect } from 'react';

interface Lead {
  ID: number;
  NOMBRE: string;
  EMAIL: string;
  TELEFONO: string;
  TIPO_CASO: string;
  CIUDAD: string;
  ESTADO: string;
  FECHA_CAPTURA: string;
  FUENTE: string;
  NOTAS: string;
}

export default function Dashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterCity, setFilterCity] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/leads')
      .then((res) => res.json())
      .then((data) => {
        const leadsData = data.data || data.leads || [];
        setLeads(leadsData);
        setFilteredLeads(leadsData);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = leads.filter((lead) => {
      const matchSearch = lead.NOMBRE.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.EMAIL.toLowerCase().includes(searchTerm.toLowerCase());
      const matchType = !filterType || lead.TIPO_CASO === filterType;
      const matchCity = !filterCity || lead.CIUDAD === filterCity;
      const matchStatus = !filterStatus || lead.ESTADO === filterStatus;
      return matchSearch && matchType && matchCity && matchStatus;
    });
    setFilteredLeads(filtered);
  }, [searchTerm, filterType, filterCity, filterStatus, leads]);

  const tiposCaso = Array.from(new Set(leads.map((l) => l.TIPO_CASO)));
  const ciudades = Array.from(new Set(leads.map((l) => l.CIUDAD)));
  const estados = Array.from(new Set(leads.map((l) => l.ESTADO)));

  return (
    <div style={{
      minHeight: '100vh',
      paddingBottom: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#0052a3',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      }}>
        <h1 style={{ margin: '0 0 10px 0', fontSize: '24px' }}>⚖️ Sistema de Leads</h1>
        <p style={{ margin: '0', fontSize: '12px', opacity: 0.9 }}>{filteredLeads.length} leads encontrados</p>
      </div>

      {/* Search Bar */}
      <div style={{
        padding: '15px',
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid #ddd',
      }}>
        <input
          type="text"
          placeholder="🔍 Buscar por nombre o email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            fontSize: '14px',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Filters */}
      <div style={{
        padding: '15px',
        backgroundColor: 'white',
        borderBottom: '1px solid #eee',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px',
      }}>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          style={{
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '6px',
            fontSize: '13px',
            cursor: 'pointer',
          }}
        >
          <option value="">Tipo de Caso</option>
          {tiposCaso.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>

        <select
          value={filterCity}
          onChange={(e) => setFilterCity(e.target.value)}
          style={{
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '6px',
            fontSize: '13px',
            cursor: 'pointer',
          }}
        >
          <option value="">Ciudad</option>
          {ciudades.map((ciudad) => (
            <option key={ciudad} value={ciudad}>
              {ciudad}
            </option>
          ))}
        </select>

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          style={{
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '6px',
            fontSize: '13px',
            cursor: 'pointer',
            gridColumn: '1 / -1',
          }}
        >
          <option value="">Estado del Lead</option>
          {estados.map((estado) => (
            <option key={estado} value={estado}>
              {estado}
            </option>
          ))}
        </select>
      </div>

      {/* Leads List */}
      <div style={{ padding: '10px' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px 20px', color: '#666' }}>
            Cargando leads...
          </div>
        ) : filteredLeads.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 20px', color: '#999' }}>
            No hay leads que coincidan con los filtros
          </div>
        ) : (
          filteredLeads.map((lead) => (
            <div
              key={lead.ID}
              style={{
                backgroundColor: 'white',
                padding: '15px',
                marginBottom: '10px',
                borderRadius: '8px',
                border: '1px solid #eee',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                marginBottom: '10px',
              }}>
                <div>
                  <h3 style={{
                    margin: '0 0 5px 0',
                    fontSize: '16px',
                    color: '#0066cc',
                    fontWeight: 'bold',
                  }}>
                    {lead.NOMBRE}
                  </h3>
                  <p style={{ margin: '0', fontSize: '12px', color: '#666' }}>
                    📧 {lead.EMAIL}
                  </p>
                </div>
                <span style={{
                  backgroundColor: lead.ESTADO === 'Nuevo' ? '#4CAF50' : 
                                 lead.ESTADO === 'Calificado' ? '#2196F3' :
                                 lead.ESTADO === 'En Negociacion' ? '#FF9800' : '#f44336',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap',
                }}>
                  {lead.ESTADO}
                </span>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
                marginBottom: '10px',
                fontSize: '13px',
              }}>
                <div>
                  <span style={{ color: '#999', fontSize: '11px' }}>Teléfono</span>
                  <p style={{ margin: '3px 0 0 0', fontWeight: 'bold', color: '#333' }}>
                    {lead.TELEFONO}
                  </p>
                </div>
                <div>
                  <span style={{ color: '#999', fontSize: '11px' }}>Tipo de Caso</span>
                  <p style={{ margin: '3px 0 0 0', fontWeight: 'bold', color: '#0066cc' }}>
                    {lead.TIPO_CASO}
                  </p>
                </div>
                <div>
                  <span style={{ color: '#999', fontSize: '11px' }}>Ciudad</span>
                  <p style={{ margin: '3px 0 0 0', fontWeight: 'bold', color: '#333' }}>
                    📍 {lead.CIUDAD}
                  </p>
                </div>
                <div>
                  <span style={{ color: '#999', fontSize: '11px' }}>Fuente</span>
                  <p style={{ margin: '3px 0 0 0', fontWeight: 'bold', color: '#666' }}>
                    {lead.FUENTE}
                  </p>
                </div>
              </div>

              <div style={{
                paddingTop: '10px',
                borderTop: '1px solid #f0f0f0',
                fontSize: '12px',
                color: '#999',
              }}>
                📅 {lead.FECHA_CAPTURA} | 📝 {lead.NOTAS}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
