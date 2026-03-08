'use client';

import { useAuth } from '@/context/AuthContext';
import { HiOutlineBell } from 'react-icons/hi';

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100/50 sticky top-0 z-30">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="lg:hidden w-10"></div>
        <div>
          <h1 className="text-xl font-extrabold text-gray-900 font-heading">
            Welcome, {user?.name || 'User'} 👋
          </h1>
          <p className="text-sm text-gray-400 capitalize">
            {user?.role?.replace('_', ' ')} Dashboard
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2.5 text-gray-400 hover:text-primary-500 transition-colors rounded-brand hover:bg-primary-50">
            <HiOutlineBell className="w-6 h-6" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent-500 rounded-full ring-2 ring-white"></span>
          </button>
          <div className="w-10 h-10 rounded-brand bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold shadow-brand">
            {user?.name?.charAt(0) || 'U'}
          </div>
        </div>
      </div>
    </header>
  );
}
