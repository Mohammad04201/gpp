import { Link } from 'react-router-dom';

const UserAvatar = ({ user, isMobile = false, isDarkMode }) => (
  <div className="relative">
    <div className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold shadow-lg group-hover:shadow-xl transition-all duration-200 ${isMobile ? 'text-sm' : ''}`}>
      {user.avatar}
    </div>
    <div className={`absolute -bottom-1 -right-1 ${isMobile ? 'w-2 h-2' : 'w-3 h-3'} bg-green-500 rounded-full border-2 ${isDarkMode ? 'border-gray-900' : 'border-white'}`}></div>
  </div>
);

const UserInfo = ({ user, isDarkMode }) => (
  <div className="flex flex-col items-start">
    <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{user.name}</span>
    <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} capitalize`}>{user.type}</span>
  </div>
);

const UserMenuArrow = ({ isOpen, isDarkMode }) => (
  <svg 
    className={`w-4 h-4 transition-transform duration-200 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} ${isOpen ? 'rotate-180' : ''}`}
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const UserDropdownMenu = ({ user, onClose, isMobile = false, isDarkMode }) => (
  <div className={`absolute right-0 ${isMobile ? 'top-full mt-2' : 'mt-3'} ${isMobile ? 'w-72' : 'w-80'} ${isDarkMode ? 'bg-[#20232A] border-[#3a4750]' : 'bg-white border-gray-200'} rounded-xl shadow-2xl border overflow-hidden z-50 max-h-96 overflow-y-auto`}>
    {/* User Header */}
    <div className={`bg-gradient-to-r from-teal-600 to-cyan-600 p-4 text-white`}>
      <div className="flex items-center space-x-3">
        <div className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'} bg-white/20 rounded-full flex items-center justify-center ${isMobile ? 'text-lg' : 'text-2xl'} font-bold backdrop-blur-sm`}>
          {user.avatar}
        </div>
        <div>
          <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold`}>{user.name}</h3>
          <p className="text-sm opacity-90">{user.email}</p>
          <div className="mt-1 flex items-center space-x-2">
            <span className="px-2 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm">
              {user.type}
            </span>
            <span className="flex items-center space-x-1 text-xs">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Active</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Quick Links */}
    <div className="p-3">
      <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-2'} gap-2 mb-3`}>
        <QuickLink
          to="/dashboard/developer"
          icon="🏠"
          label="Dashboard"
          onClose={onClose}
          isMobile={isMobile}
          isDarkMode={isDarkMode}
        />
        <QuickLink
          to="/profile"
          icon="👤"
          label="الملف"
          onClose={onClose}
          isMobile={isMobile}
          isDarkMode={isDarkMode}
        />
        <QuickLink
          to="/my-jobs"
          icon="💼"
          label="وظائفي"
          onClose={onClose}
          isMobile={isMobile}
          isDarkMode={isDarkMode}
        />
        <QuickLink
          to="/settings"
          icon="⚙️"
          label="Settings"
          onClose={onClose}
          isMobile={isMobile}
          isDarkMode={isDarkMode}
        />
      </div>

      {/* Notifications */}
      <NotificationsSection isMobile={isMobile} isDarkMode={isDarkMode} />

      {/* Logout */}
      <LogoutButton isMobile={isMobile} isDarkMode={isDarkMode} />
    </div>
  </div>
);

const QuickLink = ({ to, icon, label, onClose, isMobile, isDarkMode }) => (
  <Link
    to={to}
    className={`flex flex-col items-center p-2 rounded-lg transition-colors duration-200 ${
      isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'
    }`}
    onClick={onClose}
  >
    <div className={`w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center mb-1 ${isMobile ? 'w-6 h-6' : ''}`}>
      <span className={`${isMobile ? 'text-xs' : 'text-lg'}`}>{icon}</span>
    </div>
    <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{label}</span>
  </Link>
);

const NotificationsSection = ({ isMobile, isDarkMode }) => (
  <div className={`border-t pt-2 mb-2 ${isDarkMode ? 'border-[#3a4750]' : 'border-gray-200'}`}>
    <div className="flex items-center justify-between mb-2">
      <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Notifications</span>
      <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full">3</span>
    </div>
    <div className="space-y-1">
      <NotificationItem
        type="teal"
        text="Your application for Frontend was accepted"
        time="5 minutes ago"
        isDarkMode={isDarkMode}
      />
      <NotificationItem
        type="green"
        text="New developer is following your profile"
        time="1 hour ago"
        isDarkMode={isDarkMode}
      />
    </div>
  </div>
);

const NotificationItem = ({ type, text, time, isDarkMode }) => (
  <div className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-colors ${
    isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'
  }`}>
    <div className={`w-2 h-2 bg-${type}-500 rounded-full`}></div>
    <div className="flex-1">
      <p className={`text-xs ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>{text}</p>
      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{time}</p>
    </div>
  </div>
);

const LogoutButton = ({ isMobile, isDarkMode }) => (
  <button className={`w-full flex items-center justify-center space-x-2 p-2 rounded-lg transition-colors duration-200 ${
    isDarkMode 
      ? 'bg-red-500/20 hover:bg-red-500/30 text-red-400' 
      : 'bg-red-50 hover:bg-red-100 text-red-600'
  }`}>
    <svg className={`w-4 h-4 ${isMobile ? 'w-3 h-3' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
    <span className={`font-medium ${isMobile ? 'text-sm' : ''}`}>Logout</span>
  </button>
);

const NavbarUser = ({ user, isUserMenuOpen, userMenuRef, setIsUserMenuOpen, isMobile = false, isDarkMode }) => {
  if (!user) return null;

  return (
    <div className="relative" ref={userMenuRef}>
      <button
        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        className={`flex items-center ${isMobile ? 'space-x-2' : 'space-x-3'} p-2 rounded-lg transition-all duration-200 group ${
          isDarkMode ? 'hover:bg-gray-800/50' : 'hover:bg-gray-100'
        }`}
      >
        <UserAvatar user={user} isMobile={isMobile} isDarkMode={isDarkMode} />
        
        {!isMobile && (
          <>
            <UserInfo user={user} isDarkMode={isDarkMode} />
            <UserMenuArrow isOpen={isUserMenuOpen} isDarkMode={isDarkMode} />
          </>
        )}
      </button>
      
      {isUserMenuOpen && (
        <UserDropdownMenu 
          user={user} 
          onClose={() => setIsUserMenuOpen(false)}
          isMobile={isMobile}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
};

export default NavbarUser;
