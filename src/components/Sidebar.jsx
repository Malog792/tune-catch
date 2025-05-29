// src/components/Sidebar.jsx

import { Home, Search, Heart, UserRound } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="bg-[#fff3f3]  w-64 p-6 font-poppins text-base">
      <nav className="flex flex-col gap-6 mt-6">
        <a href="#" className="flex items-center gap-3 text-black hover:text-pink-600 transition">
          <Home size={26} strokeWidth={2.2} />
          Home
        </a>
        <a href="#" className="flex items-center gap-3 text-black hover:text-pink-600 transition">
          <Search size={26} strokeWidth={2.2} />
          Pesquisar
        </a>
        <a href="#" className="flex items-center gap-3 text-black hover:text-pink-600 transition">
          <Heart size={26} strokeWidth={2.2} />
          Playlists Curtidas
        </a>
        <a href="#" className="flex items-center gap-3 text-black hover:text-pink-600 transition">
          <UserRound size={26} strokeWidth={2.2} />
          Meu perfil
        </a>
      </nav>
    </aside>
  );
}
