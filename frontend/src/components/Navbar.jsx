import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-green-600">
        🎓 Student Manager
      </Link>

      <div className="space-x-4 flex items-center">
        {token ? (
          <>
            <Link to="/" className="hover:text-green-600 font-medium">Dashboard</Link>
            <Link to="/add" className="hover:text-green-600 font-medium">Add Student</Link>
            <p className="text-sm mt-2">
              <a href="/forgot-password" className="hover:text-green-600 font-medium">
                Forgot Password?
              </a>
            </p>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-green-600 font-medium">Login</Link>
            <Link to="/register" className="hover:text-green-600 font-medium">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
