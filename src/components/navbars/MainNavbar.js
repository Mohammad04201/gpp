import { useState } from 'react';
import { useTheme } from '../hooks/useThemeContext';
import { useUser } from '../hooks/useUser';
import NavbarHeader, { NavbarNavigation } from './components/NavbarHeader';
import NavbarThemeToggle from './components/NavbarTheme';
import NavbarUser from './components/NavbarUser';
import NavbarAuth from './components/NavbarAuth';
import { MobileMenuButton, MobileMenu } from './components/NavbarMobile';

function MainNavbar() {
  // Navigation state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Theme and User state from contexts
  const { isDarkMode, toggleTheme } = useTheme();
  const { user, isUserMenuOpen, setIsUserMenuOpen, userMenuRef } = useUser();

  // Navigation handlers
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const closeUserMenu = () => {
    setIsUserMenuOpen(false);
  };

  // Theme handler with debug
  const handleThemeToggle = () => {
    console.log('Theme toggle clicked!');
    console.log('Current theme:', isDarkMode ? 'dark' : 'light');
    toggleTheme();
  };

  // Navigation items
  const navigationItems = [
    { path: "/", label: "Home" },
    { path: "/companies", label: "Companies" },
    { path: "/developers", label: "Developers" },
    { path: "/jobs", label: "Jobs" },
    { path: "/favorites", label: "Favorites" },
    { path: "/FovertDevloper", label: "FovertDevloper" },
    { path: "/dashboard/developer", label: "Developer Dashboard" },
    { path: "/dashboard/company", label: "Company Dashboard" }
  ];

  return (
    <nav
      className={`sticky top-0 z-50 border-b ${
        isDarkMode
          ? 'bg-[#20232A] border-[#282C34]'
          : 'bg-white border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side: Logo + Desktop Navigation */}
          <div className="flex items-center space-x-8">
            <NavbarHeader 
              navigationItems={navigationItems}
              isMobileMenuOpen={isMobileMenuOpen}
              onMobileMenuClose={closeMobileMenu}
              isDarkMode={isDarkMode}
            />
          </div>

          {/* Center: Desktop Theme Toggle */}
          <div className="hidden md:flex items-center">
            <NavbarThemeToggle 
              isDarkMode={isDarkMode} 
              onToggle={handleThemeToggle} 
            />
          </div>

          {/* Right Side: User/Auth */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <NavbarUser
                user={user}
                isUserMenuOpen={isUserMenuOpen}
                userMenuRef={userMenuRef}
                setIsUserMenuOpen={setIsUserMenuOpen}
                isDarkMode={isDarkMode}
              />
            ) : (
              <NavbarAuth 
                isDarkMode={isDarkMode}
              />
            )}
          </div>

          {/* Mobile: User + Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {user && (
              <NavbarUser
                user={user}
                isUserMenuOpen={isUserMenuOpen}
                userMenuRef={userMenuRef}
                setIsUserMenuOpen={setIsUserMenuOpen}
                isMobile={true}
                isDarkMode={isDarkMode}
              />
            )}
            
            <MobileMenuButton 
              isOpen={isMobileMenuOpen} 
              onToggle={toggleMobileMenu} 
              isDarkMode={isDarkMode}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          onClose={closeMobileMenu}
          isDarkMode={isDarkMode}
        >
          <div className="space-y-4">
            {/* Mobile Theme Toggle */}
            <div className="flex justify-center">
              <NavbarThemeToggle 
                isDarkMode={isDarkMode} 
                onToggle={handleThemeToggle} 
              />
            </div>

            {/* Mobile Auth (if not logged in) */}
            {!user && (
              <NavbarAuth 
                isMobile={true} 
                onItemClick={closeMobileMenu} 
                isDarkMode={isDarkMode}
              />
            )}
          </div>
        </MobileMenu>
      </div>
    </nav>
  );
}

export default MainNavbar;

