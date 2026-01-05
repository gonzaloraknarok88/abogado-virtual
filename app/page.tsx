export default function Home() {
const lawyers = [
{id: 1, name: 'Dr. Carlos Rodriguez', specialty: 'Derecho Laboral', experience: 15, bio: 'Especialista en derecho laboral', whatsapp: '56912345678', email: 'carlos@ejemplo.com', rating: 4.8, cases: 250},
{id: 2, name: 'Dra. Maria Santos', specialty: 'Derecho Familiar', experience: 12, bio: 'Especialista en divorcios', whatsapp: '56987654321', email: 'maria@ejemplo.com', rating: 4.9, cases: 180},
{id: 3, name: 'Dr. Juan Morales', specialty: 'Derecho Penal', experience: 18, bio: 'Experto en defensa penal', whatsapp: '56912988765', email: 'juan@ejemplo.com', rating: 4.7, cases: 320},
{id: 4, name: 'Dra. Patricia Gonzalez', specialty: 'Derecho Mercantil', experience: 10, bio: 'Especialista en comercial', whatsapp: '56912555444', email: 'patricia@ejemplo.com', rating: 4.6, cases: 145},
{id: 5, name: 'Dr. Roberto Silva', specialty: 'Derecho Inmobiliario', experience: 14, bio: 'Experto inmobiliario', whatsapp: '56912111222', email: 'roberto@ejemplo.com', rating: 4.8, cases: 200}
];
return (
<main className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
<div className='max-w-6xl mx-auto px-4 py-12'>
<h1 className='text-5xl font-bold text-center mb-4'>Abogado Virtual</h1>
<p className='text-xl text-center text-gray-600 mb-12'>Consulta legal con abogados verificados</p>
<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
{lawyers.map(lawyer => (<div key={lawyer.id} className='bg-white rounded-lg shadow-lg p-6'>
<h2 className='text-xl font-bold'>{lawyer.name}</h2>
<p className='text-blue-600 font-semibold'>{lawyer.specialty}</p>
<p>{lawyer.bio}</p>
<div className='flex gap-2 mt-4'>
<a href={`https://wa.me/${lawyer.whatsapp}`} className='flex-1 bg-green-500 text-white py-2 px-4 rounded text-center'>WhatsApp</a>
<a href={`mailto:${lawyer.email}`} className='flex-1 bg-blue-500 text-white py-2 px-4 rounded text-center'>Email</a>
</div>
</div>))}
</div>
</div>
</main>
);
}
