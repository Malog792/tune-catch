import Sidebar from './Sidebar.jsx';
import Topbar from './Topbar.jsx';
import logo from '../assets/logo.png'; // Certifique-se de que o caminho está correto

export default function Home() {
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




        
      </aside>


      {/* Barra de navegação superior */}
      <div className="flex">
        <Topbar />
        
      </div>




    
    </div>
    
  );
}