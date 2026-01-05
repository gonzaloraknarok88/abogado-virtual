'use client';

import Link from 'next/link';

const lawyers = [
  {
    id: 1,
    name: 'Dr. Carlos Rodriguez',
    specialty: 'Derecho Laboral',
    bio: 'Especialista en derecho laboral',
    experience: 15,
    whatsapp: '+56912345678',
    email: 'carlos@abogado.cl'
  },
  {
    id: 2,
    name: 'Dra. Maria Santos',
    specialty: 'Derecho Familiar',
    bio: 'Especialista en divorcios',
    experience: 12,
    whatsapp: '+56912345679',
    email: 'maria@abogado.cl'
  },
  {
    id: 3,
    name: 'Dr. Juan Morales',
    specialty: 'Derecho Penal',
    bio: 'Experto en defensa penal',
    experience: 18,
    whatsapp: '+56912345680',
    email: 'juan@abogado.cl'
  },
  {
    id: 4,
    name: 'Dra. Patricia Gonzalez',
    specialty: 'Derecho Mercantil',
    bio: 'Especialista en comercial',
    experience: 10,
    whatsapp: '+56912345681',
    email: 'patricia@abogado.cl'
  },
  {
    id: 5,
    name: 'Dr. Roberto Silva',
    specialty: 'Derecho Inmobiliario',
    bio: 'Experto inmobiliario',
    experience: 14,
    whatsapp: '+56912345682',
    email: 'roberto@abogado.cl'
  }
];

export default function Abogados() {
  return (
    <main className="min-h-screen pt-6 px-4">
      <h1 className="text-3xl font-bold text-white mb-2 text-center">👨‍⚖️ Escoge Tu Abogado</h1>
      <p className="text-blue-100 text-center mb-6">Especialistas verificados</p>

      <div className="space-y-4">
        {lawyers.map((lawyer) => (
          <div key={lawyer.id} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4 border border-white border-opacity-20">
            <h3 className="text-white font-bold text-lg">{lawyer.name}</h3>
            <p className="text-yellow-300 font-semibold">{lawyer.specialty}</p>
            <p className="text-blue-100 text-sm mt-1">{lawyer.bio}</p>
            <p className="text-gray-300 text-xs mt-2">Experiencia: {lawyer.experience} años</p>
            
            <div className="flex gap-2 mt-4">
              <a href={`https://wa.me/${lawyer.whatsapp.replace(/\D/g, '')}`} 
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg text-center text-sm transition-all"
              >
                💬 WhatsApp
              </a>
              <a href={`mailto:${lawyer.email}`}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg text-center text-sm transition-all"
              >
                ✉️ Email
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
