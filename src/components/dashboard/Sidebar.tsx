'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import {
  HiOutlineHome,
  HiOutlineDocumentText,
  HiOutlineUsers,
  HiOutlineLogout,
  HiOutlineMenu,
  HiOutlineX,
  HiOutlinePlus,
} from 'react-icons/hi';

const adminLinks = [
  { name: 'Dashboard', href: '/dashboard', icon: HiOutlineHome },
  { name: 'Records', href: '/dashboard/records', icon: HiOutlineDocumentText },
  { name: 'Add Record', href: '/dashboard/records/new', icon: HiOutlinePlus },
  { name: 'Team Members', href: '/dashboard/users', icon: HiOutlineUsers },
];

const memberLinks = [
  { name: 'Dashboard', href: '/dashboard', icon: HiOutlineHome },
  { name: 'My Records', href: '/dashboard/records', icon: HiOutlineDocumentText },
  { name: 'Add Record', href: '/dashboard/records/new', icon: HiOutlinePlus },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const links = user?.role === 'admin' ? adminLinks : memberLinks;

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <img src="/logo.svg" alt="DH Financial" className="w-10 h-10 object-contain drop-shadow-lg" />
          {!collapsed && (
            <div>
              <h2 className="font-extrabold text-white text-lg font-heading">DH Financial</h2>
              <p className="text-[11px] text-gray-400 tracking-wider uppercase">Services</p>
            </div>
          )}
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 p-4 space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-brand transition-all duration-200 ${
                isActive
                  ? 'bg-accent-500 text-white shadow-brand-accent'
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <link.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span className="font-medium">{link.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* User & Logout */}
      <div className="p-4 border-t border-white/10">
        {!collapsed && (
          <div className="px-4 py-2 mb-3">
            <p className="text-white font-semibold text-sm">{user?.name}</p>
            <p className="text-gray-400/80 text-xs capitalize">{user?.role?.replace('_', ' ')}</p>
          </div>
        )}
        <button
          onClick={logout}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-brand text-gray-300 hover:bg-red-500/20 hover:text-red-300 transition-all"
        >
          <HiOutlineLogout className="w-5 h-5" />
          {!collapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-primary-500 text-white rounded-lg shadow-lg"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 gradient-bg z-40 transform transition-transform ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SidebarContent />
      </div>

      {/* Desktop sidebar */}
      <div
        className={`hidden lg:block h-screen gradient-bg sticky top-0 transition-all duration-300 ${
          collapsed ? 'w-20' : 'w-64'
        }`}
      >
        <SidebarContent />
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-8 w-6 h-6 bg-accent-500 rounded-full text-white text-xs flex items-center justify-center shadow-lg"
        >
          {collapsed ? '→' : '←'}
        </button>
      </div>
    </>
  );
}
