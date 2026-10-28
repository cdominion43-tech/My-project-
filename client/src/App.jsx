import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';

function NavBar() {
  const location = useLocation();
  const isSignup = location.pathname === '/signup';
  const isLogin = location.pathname === '/login';

  return (
    <nav className="w-full bg-gray-150 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-purple-700 tracking-tight">
        FLORECERS
        </Link>
        <div className="flex items-center gap-2">
          <Link
            to="/signup"
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              isSignup
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-200'
                : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
            }`}
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              isLogin
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-200'
                : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
            }`}
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
        <NavBar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Welcome to <span className="text-purple-600">FLORENCE</span>
              </h1>
              <p className="text-gray-500 text-lg mb-8 max-w-md">
                Secure authentication with a modern, clean design.
              </p>
              <div className="flex gap-4">
                <Link to="/signup" className="px-8 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition shadow-lg shadow-purple-200">
                  Get Started
                </Link>
                <Link to="/login" className="px-8 py-3 bg-white text-purple-600 border border-purple-200 rounded-full font-medium hover:bg-purple-50 transition">
                  Sign In
                </Link>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;