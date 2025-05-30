// src/components/Topbar.jsx
import { BarChart, BellIcon, Share, UserRound, Search } from 'lucide-react'; // ou substitua pelo <img> se for usar outro ícone
import { Profiler } from 'react';

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

                {/*cumprimentos*/}

                <div className="flex items-center gap-3">
                    <div className="flex flex-col leading-tight">
                        <span className="text-sm text-gray-700 font-medium">Olá,</span>
                        <span className="text-xs text-gray-500 font-medium">usuário!</span>
                    </div>{/* fim de cumprimentos */}

                    {/* Ícone de usuário */}
                    <div className="w-9 h-9 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center">
                       <UserRound size={24} className="text-gray-500" />
                    </div> {/* fim de ícone de usuário */}

                </div>{/* fim de cumprimentos */}
            </nav> {/* fim de direita */}
        </header>
    );
}
