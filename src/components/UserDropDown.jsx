// src/components/UserDropdown.jsx
import { UserRound, LogOut, Settings, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function UserDropdown() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de login

  return (
    <div className="relative">
      {/* Avatar e cumprimento */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div className="flex flex-col leading-tight">
          <span className="text-sm text-gray-700 font-medium">Olá,</span>
          <span className="text-xs text-gray-500 font-medium">usuário!</span>
        </div>
        <div className="w-9 h-9 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center">
          <UserRound size={24} className="text-gray-500" />
        </div>
        <ChevronDown size={18} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-md animate-fade-in z-50">
          {!isLoggedIn ? (
            <Link
              to="/login"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <UserRound size={18} /> Login
            </Link>
          ) : (
            <>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Settings size={18} /> Configurações
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-100"
                onClick={() => setIsLoggedIn(false)}
              >
                <LogOut size={18} /> Sair
              </a>
            </>
          )}
        </div>
      )}
    </div>
  );
}
