import { Link } from 'react-router-dom';

export const NavbarLogo = ({ isDarkMode }) => (
  <Link 
    to="/" 
    className={`font-bold text-xl transition-colors duration-200 ${
      isDarkMode 
        ? 'text-teal-400 hover:text-teal-300' 
        : 'text-teal-600 hover:text-teal-700'
    }`}
  >
    GP AI
  </Link>
);

export const NavbarNavigation = ({ items, isMobile = false, onItemClick, isDarkMode }) => {
  const baseClasses = isMobile 
    ? "block px-3 py-2 rounded-md transition-all duration-200"
    : "transition-colors duration-200";

  const themeClasses = isDarkMode
    ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100";

  return (
    <div className={isMobile ? "px-2 pt-2 pb-3 space-y-1 sm:px-3" : "flex items-center space-x-8"}>
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`${baseClasses} ${themeClasses}`}
          onClick={onItemClick}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

const NavbarHeader = ({ navigationItems, isMobileMenuOpen, onMobileMenuClose, isDarkMode }) => (
  <>
    <NavbarLogo isDarkMode={isDarkMode} />
    
    {/* Desktop Navigation */}
    <div className="hidden md:flex items-center space-x-8">
      <NavbarNavigation 
        items={navigationItems} 
        isDarkMode={isDarkMode}
      />
    </div>

    {/* Mobile Navigation */}
    {isMobileMenuOpen && (
      <div className="md:hidden">
        <NavbarNavigation 
          items={navigationItems} 
          isMobile={true} 
          onItemClick={onMobileMenuClose}
          isDarkMode={isDarkMode}
        />
      </div>
    )}
  </>
);

export default NavbarHeader;
