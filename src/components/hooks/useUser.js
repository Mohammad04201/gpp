import { useState, useEffect, useRef } from 'react';

export const useUser = () => {
  const [user, setUser] = useState(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Simulate logged in user
  useEffect(() => {
    const userData = {
      name: 'Ahmed Mohammed',
      email: 'ahmed@example.com',
      avatar: 'AM',
      type: 'developer'
    };
    setUser(userData);
  }, []);

  const handleLogin = (userType) => {
    const userData = {
      type: userType,
      name: userType === 'developer' ? 'Ahmed Mohammed' : 'Tech Company',
      email: userType === 'developer' ? 'ahmed@example.com' : 'company@example.com',
      avatar: userType === 'developer' ? '👨‍💻' : '🏢'
    };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  return { user, isUserMenuOpen, setIsUserMenuOpen, userMenuRef, handleLogin };
};
