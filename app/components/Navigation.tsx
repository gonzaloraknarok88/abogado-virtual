'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const [active, setActive] = useState('home');

  const navItems = [
    { id: 'home', label: 'Inicio', icon: '🏠', path: '/' },
    { id: 'abogados', label: 'Abogados', icon: '👨‍⚖️', path: '/abogados' },
    { id: 'causas', label: 'Causas', icon: '⚖️', path: '/causas' },
    { id: 'contacto', label: 'Contacto', icon: '📞', path: '/contacto' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-blue-800 border-t-2 border-blue-600 shadow-xl">
      <div className="flex justify-around items-center h-20 max-w-md mx-auto">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.path}
            onClick={() => setActive(item.id)}
            className={`flex flex-col items-center justify-center w-16 h-16 transition-all duration-300 ${
              active === item.id
                ? 'text-yellow-300 scale-110 drop-shadow-lg'
                : 'text-gray-300 hover:text-blue-200'
            }`}
          >
            <span className="text-2xl mb-1">{item.icon}</span>
            <span className="text-xs font-bold">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
