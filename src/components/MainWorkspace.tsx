import React, { useEffect } from 'react';
import { useDrillTrack } from '../context/DrillTrackContext';
import { Dashboard } from './Dashboard';
import { Opex } from './Opex';
import { Dce } from './Dce';
import { Advance } from './Advance';
import { 
  Wifi, 
  WifiOff, 
  CloudLightning,
  CheckCircle2, 
  AlertCircle,
  XCircle,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const MainWorkspace: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    toasts,
    removeToast,
    user,
    syncStatus,
    isOffline
  } = useDrillTrack();

  // Ensure default theme is always light mode
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  const navMenuItems = [
    { id: 'dashboard', label: 'DASHBOARD' },
    { id: 'opex', label: 'OPEX' },
    { id: 'dce', label: 'DCA' },
    { id: 'advance', label: 'IMPREST' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50 dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-200 font-sans">
      
      {/* App Header section */}
      <header id="app-header" className="sticky top-0 z-40 w-full h-[72px] bg-white dark:bg-slate-900 border-b border-gray-200/90 dark:border-slate-800 backdrop-blur-md px-4 md:px-8 flex items-center justify-between shadow-3xs select-none">
        <div className="flex-1 flex items-center justify-start gap-3">
          <div>
            <h1 className="font-sans font-extrabold text-base md:text-lg leading-none tracking-tight text-gray-950 dark:text-white flex items-center gap-1.5 uppercase">
              EXPLORATION
            </h1>
          </div>

          {/* Sync operations diagnostics badge */}
          <div className="flex items-center gap-1">
            {isOffline ? (
              <span className="flex items-center gap-1 px-2 py-0.5 bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-450 text-[9px] font-bold rounded-full uppercase tracking-wider">
                <WifiOff className="w-2.5 h-2.5 shrink-0 animate-pulse" />
                <span>Offline mode</span>
              </span>
            ) : (
              <span className="flex items-center gap-1 px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 text-[9px] font-bold rounded-full uppercase tracking-wider">
                <Wifi className="w-2.5 h-2.5 shrink-0" />
                <span>
                  {syncStatus === 'syncing' ? 'Syncing...' : 'Connected'}
                </span>
              </span>
            )}
          </div>
        </div>

        {/* Tab Selection Navigation pills on larger screen */}
        <nav id="navbar-pills" className="hidden sm:flex items-center bg-gray-150/70 dark:bg-slate-800/40 p-1.5 rounded-2xl border border-gray-200/20 dark:border-slate-800">
          {navMenuItems.map(item => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className="relative px-5 py-2 md:px-6 md:py-2.5 text-sm font-bold rounded-xl transition-colors cursor-pointer select-none"
              >
                {isActive && (
                  <motion.div
                    id={`active-indicator-${item.id}`}
                    layoutId="active-pill"
                    transition={{ type: 'spring', stiffness: 120, damping: 15 }}
                    className="absolute inset-0 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200/35 dark:border-slate-800"
                  />
                )}
                <span className={`relative z-10 uppercase tracking-wide ${isActive ? 'text-gray-950 dark:text-white' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Actions Toolbar */}
        <div className="flex-1 flex items-center justify-end gap-3">
        </div>
      </header>

      {/* Sub sticky navigation for smaller viewport width */}
      <nav id="mobile-navigation" className="sm:hidden block sticky top-[72px] z-30 bg-white/90 dark:bg-slate-900/95 border-b border-gray-200/85 dark:border-slate-800 shadow-3xs p-2.5">
        <div className="flex items-center justify-around gap-1.5 font-sans">
          {navMenuItems.map(item => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`flex-1 text-center py-2.5 text-sm font-bold rounded-xl transition-colors cursor-pointer select-none ${
                  isActive 
                    ? 'bg-gray-950 text-white dark:bg-white dark:text-gray-955'
                    : 'text-gray-400 dark:text-gray-500 hover:text-gray-650'
                }`}
              >
                {item.label.split(' ')[0]} {/* Shorter label for mobile display */}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Current Selection view render layout panel container */}
      <main id="main-content-flow" className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.15 }}
          >
            {activeTab === 'dashboard' && <Dashboard />}
            {activeTab === 'opex' && <Opex />}
            {activeTab === 'dce' && <Dce />}
            {activeTab === 'advance' && <Advance />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Sathi Planners Enterprise footer */}
      <footer className="w-full max-w-7xl mx-auto px-4 md:px-8 py-6 border-t border-gray-100 dark:border-slate-900 flex items-center justify-center text-[11px] font-bold tracking-wider text-gray-400 dark:text-gray-600 uppercase select-none">
        <div>
          <span>Copyright © Sathi Planners Private Limited.</span>
        </div>
      </footer>

      {/* Toasts overlay notifications floating wrapper block (absolute aligned) */}
      <div id="toast-wrapper" className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm pointer-events-none">
        <AnimatePresence>
          {toasts.map(t => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={() => removeToast(t.id)}
              className="pointer-events-auto bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-4 rounded-2xl shadow-xl flex items-start gap-3 cursor-pointer select-none shrink-0"
            >
              <div className="mt-0.5">
                {t.type === 'success' && <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500" />}
                {t.type === 'error' && <XCircle className="w-4.5 h-4.5 text-rose-505" />}
                {t.type === 'info' && <AlertCircle className="w-4.5 h-4.5 text-blue-500" />}
              </div>
              <div className="flex-1 pr-1 text-xs font-bold leading-relaxed text-gray-800 dark:text-gray-200">
                {t.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
};
