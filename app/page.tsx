'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <main className="min-h-screen pt-8 px-4">
      {/* Encabezado animado */}
      <div className={`text-center mb-8 transition-all duration-1000 transform ${
        animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <h1 className="text-5xl font-black text-white mb-2 drop-shadow-lg">⚖️</h1>
        <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">Abogado Virtual</h2>
        <p className="text-lg text-blue-100 font-semibold">Consulta legal verificada 24/7</p>
      </div>

      {/* Opciones principales */}
      <div className="space-y-4 mt-12">
        <Link href="/abogados"
          className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 text-center text-xl"
        >
          👨‍⚖️ ESCOGE TU ABOGADO
        </Link>

        <Link href="/causas"
          className="block w-full bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 text-center text-xl"
        >
          ⚖️ LAS CAUSAS
        </Link>

        <Link href="/contacto"
          className="block w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 text-center text-xl"
        >
          📞 CONTÁCTANOS
        </Link>
      </div>

      {/* Información */}
      <div className="mt-12 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
        <h3 className="text-white font-bold text-lg mb-4 text-center">Servicios Disponibles</h3>
        <div className="space-y-3 text-white text-sm">
          <p className="flex items-center">✅ Consulta Legal Inmediata</p>
          <p className="flex items-center">✅ Abogados Especializados</p>
          <p className="flex items-center">✅ Respuesta en Tiempo Real</p>
          <p className="flex items-center">✅ Privacidad Garantizada</p>
        </div>
      </div>
    </main>
  );
}
