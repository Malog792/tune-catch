// src/App.jsx
import logo from './assets/logo.png';
import Sidebar from './components/Sidebar';


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

      {/* Conteúdo principal */}
      <main className="flex-1 p-6">

        {/* Seção de playlists recomendadas */}
        <h2 className="text-xl font-semibold mb-4">Essas playlists ainda pensam em você...</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-3 shadow rounded">duskbreaker</div>
          <div className="bg-white p-3 shadow rounded">Heartguided</div>
          <div className="bg-white p-3 shadow rounded">ARMAGEDDON</div>
          <div className="bg-white p-3 shadow rounded">STARCATCHEERS</div>
        </div>

        {/* Seção de playlists dos amigos */}
        <h2 className="text-xl font-semibold mt-8 mb-4">Seus amigos têm bom gosto...</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-3 shadow rounded">Playlist 1</div>
          <div className="bg-white p-3 shadow rounded">Playlist 2</div>
          <div className="bg-white p-3 shadow rounded">Playlist 3</div>
          <div className="bg-white p-3 shadow rounded">Playlist 4</div>
        </div>

      </main>
    </div>
  );
}
