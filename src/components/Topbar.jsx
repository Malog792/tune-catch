// src/components/Topbar.jsx
import { BarChart, BellIcon, Share, UserRound, Search } from 'lucide-react'; // ou substitua pelo <img> se for usar outro ícone
import { Profiler } from 'react';
import UserDropdown from './UserDropDown.jsx';

export default function Topbar() {
    return (
        <header className="fixed top-0 w-[calc(100%-15rem)] h-16 px-6 flex items-center justify-between z-50 ">

            {/* Esquerda (Barra de pesquisa) */}
            <div className="flex items-center w-full max-w-md rounded-full border border-pink-300 px-4 py-2 bg-[#fff3f3]">
                <input 
                    type="text"
                    placeholder="Digite algo para pesquisar :D"
                    className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
                />
                <Search size={18} className="text-gray-400" />
            </div> {/* fim de esquerda */}

            {/* Direita (ícones) */}

            <nav className="flex items-center gap-4">

                {/* Ícone de compartilhar */}
                <a href="#" className="text-black hover:text-pink-600 transition">
                    <Share size={26} strokeWidth={2.2} />
                </a>
                {/* Ícone de notificação */}
                <a href="#" className="text-black hover:text-pink-600 transition">
                    <BellIcon size={26} strokeWidth={2.2} />
                </a>
                {/* Ícone de usuário*/}
                <UserDropdown />

            </nav> {/* fim de direita */}
        </header>
    );
}
