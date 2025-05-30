// src/App.jsx
import logo from './assets/logo.png';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex" style={{ backgroundColor: "#fff9f9" }}>

      {/* Sidebar esquerda */}
      <aside className="w-45  p-4" style={{ backgroundColor: "#fff3f3" }}>

        {/* Título/logo do site */}
        <div className="flex items-center ">
          <img src={logo} alt="TuneCatch" className="h-16 " />
        </div>



        {/* Menu de navegação principal */}


        <div className="flex">
          <Sidebar />
        </div>




        {/* Lista de playlists pessoais */}
        <div className="mt-8">
          <h2 className="font-semibold mb-2">Minhas Playlists</h2>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>• duskbreaker</li>
            <li>• hymns of a falling sky</li>
            <li>• hollow voices</li>
            <li>• nameless clouds</li>
            <li>• voidbringer</li>
          </ul>
        </div>
      </aside>


      {/* Barra de navegação superior */}
      <div className="flex">
        <Topbar />
      </div>

      {/* Conteúdo principal */}
      <main className="flex-1 p-6">

        {/* Seção de playlists recomendadas */}


        {/* Seção de playlists dos amigos */}


      </main>
    </div>
  );
}
