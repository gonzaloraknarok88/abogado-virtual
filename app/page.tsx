export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            ⚖️ Abogado Virtual
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Consulta legal con abogados verificados y especializados
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition">
            Buscar Abogado
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2">Búsqueda Avanzada</h3>
            <p>Filtra por especialidad, ubicación y precio</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Match Rápido</h3>
            <p>Encuentra el abogado perfecto en segundos</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-xl font-bold mb-2">Pagos Seguros</h3>
            <p>Transacciones encriptadas con Stripe</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600 border-t pt-8">
          <p>© 2026 Abogado Virtual. Todos los derechos reservados.</p>
        </div>
      </div>
    </main>
  );
}
