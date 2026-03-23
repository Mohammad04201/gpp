import { Link } from 'react-router-dom';

const AuthButton = ({ to, children, variant = "primary", isMobile = false, onClick, isDarkMode }) => {
  const baseClasses = isMobile 
    ? "block w-full px-3 py-2 text-center text-sm rounded-md transition-all duration-200"
    : "px-4 py-2 text-sm rounded-md transition-all duration-200";

  const variantClasses = {
    primary: isDarkMode
      ? "bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white"
      : "bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white",
    secondary: isDarkMode
      ? "border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
      : "border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
  };

  return (
    <Link
      to={to}
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

const NavbarAuth = ({ isMobile = false, onItemClick, isDarkMode }) => (
  <div className={isMobile ? "px-2 space-y-2" : "flex items-center space-x-3"}>
    <AuthButton
      to="/select-role"
      variant="secondary"
      isMobile={isMobile}
      onClick={onItemClick}
      isDarkMode={isDarkMode}
    >
      Login
    </AuthButton>
    <AuthButton
      to="/select-role"
      variant="primary"
      isMobile={isMobile}
      onClick={onItemClick}
      isDarkMode={isDarkMode}
    >
      Get Started
    </AuthButton>
  </div>
);

export default NavbarAuth;
