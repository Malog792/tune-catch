export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-60 bg-white border-r p-4">
        <h1 className="text-2xl font-bold text-pink-600 mb-6">TuneCatch</h1>
        <nav className="flex flex-col gap-2">
          <a href="#" className="text-gray-700 hover:text-pink-600">🏠 Home</a>
          <a href="#" className="text-gray-700 hover:text-pink-600">🔍 Pesquisar</a>
          <a href="#" className="text-gray-700 hover:text-pink-600">🎵 Playlists Curtidas</a>
          <a href="#" className="text-gray-700 hover:text-pink-600">👤 Meu perfil</a>
        </nav>
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
      <main className="flex-1 p-6">
        <h2 className="text-xl font-semibold mb-4">Essas playlists ainda pensam em você...</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-3 shadow rounded">duskbreaker</div>
          <div className="bg-white p-3 shadow rounded">Heartguided</div>
          <div className="bg-white p-3 shadow rounded">ARMAGEDDON</div>
          <div className="bg-white p-3 shadow rounded">STARCATCHEERS</div>
        </div>
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
