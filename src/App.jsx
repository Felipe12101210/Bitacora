import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black text-gray-300">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-blue-800 bg-gray-900/70 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
          Bitácora Digital
        </h1>
        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-cyan-400 transition">Inicio</Link></li>
          <li><Link to="/timeline" className="hover:text-green-400 transition">Timeline</Link></li>
          <li><Link to="/retos" className="hover:text-cyan-400 transition">Retos</Link></li>
          <li><Link to="/happy-canvas" className="hover:text-green-400 transition">Happy Canvas</Link></li>
        </ul>
      </nav>

      {/* Renderizado de las páginas */}
      <main className="p-20">

        <Outlet />
        
      </main>

      {/* Footer */}
      <footer className="text-center mt-16 pb-8 border-t border-blue-800">
        <p className="text-gray-400 text-sm">© 2025 Bitácora Digital</p>
        <div className="flex justify-center space-x-2 mt-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      </footer>
    </div>
  );
}
