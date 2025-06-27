import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Home, Info, Gamepad2, BarChart3, Settings, Image, Mail } from 'lucide-react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import GamePage from './components/GamePage';
import StatsPage from './components/StatsPage';
import SettingsPage from './components/SettingsPage';
import GalleryPage from './components/GalleryPage';
import ContactPage from './components/ContactPage';
import { GameStats } from './types/game';

const INITIAL_STATS: GameStats = {
  gamesPlayed: 0,
  gamesWon: 0,
  totalAttempts: 0,
  bestScore: 0,
  averageAttempts: 0
};

const pages = [
  { id: 'home', name: 'Home', icon: Home },
  { id: 'about', name: 'About Us', icon: Info },
  { id: 'game', name: 'Game', icon: Gamepad2 },
  { id: 'stats', name: 'Statistics', icon: BarChart3 },
  { id: 'settings', name: 'Settings', icon: Settings },
  { id: 'gallery', name: 'Gallery', icon: Image },
  { id: 'contact', name: 'Contact', icon: Mail },
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [stats, setStats] = useState<GameStats>(INITIAL_STATS);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedStats = localStorage.getItem('gameStats');
    const savedDifficulty = localStorage.getItem('difficulty');

    if (savedTheme) setIsDark(savedTheme === 'dark');
    if (savedStats) setStats(JSON.parse(savedStats));
    if (savedDifficulty) setDifficulty(savedDifficulty as 'easy' | 'medium' | 'hard');
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    localStorage.setItem('gameStats', JSON.stringify(stats));
    localStorage.setItem('difficulty', difficulty);
  }, [isDark, stats, difficulty]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setIsMenuOpen(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  const updateStats = (newStats: Partial<GameStats>) => {
    setStats(prev => ({ ...prev, ...newStats }));
  };

  const resetStats = () => setStats(INITIAL_STATS);

  const renderPage = () => {
    const props = { isDark, stats, updateStats, difficulty, setDifficulty, resetStats, setCurrentPage };
    switch (currentPage) {
      case 'home': return <HomePage {...props} />;
      case 'about': return <AboutPage {...props} />;
      case 'game': return <GamePage {...props} />;
      case 'stats': return <StatsPage {...props} />;
      case 'settings': return <SettingsPage {...props} />;
      case 'gallery': return <GalleryPage {...props} />;
      case 'contact': return <ContactPage {...props} />;
      default: return <HomePage {...props} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${isDark ? 'bg-black/50 border-white/20 backdrop-blur-sm' : 'bg-white/50 backdrop-blur-sm border-black/20'}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {isMobile && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-200 ${isDark ? 'hover:bg-white/10 hover:text-white' : 'hover:bg-black/10 hover:text-black'}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
            <h1 className="text-xl font-bold">MindGame</h1>
          </div>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-md transition-colors duration-200 ${isDark ? 'hover:bg-white/10 hover:text-white' : 'hover:bg-black/10 hover:text-black'}`}
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className={`fixed inset-0 z-40 ${isDark ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-sm`}>
          <div className="pt-20 px-4">
            <nav className="space-y-4">
              {pages.map(page => {
                const Icon = page.icon;
                return (
                  <button
                    key={page.id}
                    onClick={() => {
                      setCurrentPage(page.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${currentPage === page.id
                      ? isDark
                        ? 'bg-white/20 text-white'
                        : 'bg-black/20 text-black'
                      : isDark
                        ? 'hover:bg-white/10 hover:text-white'
                        : 'hover:bg-black/10 hover:text-black'
                      }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{page.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <aside className={`fixed left-0 top-0 h-full w-64 pt-20 border-r transition-colors duration-300 ${isDark ? 'bg-black border-white/20' : 'bg-white border-black/20'}`}>
          <nav className="p-4 space-y-2">
            {pages.map(page => {
              const Icon = page.icon;
              return (
                <button
                  key={page.id}
                  onClick={() => setCurrentPage(page.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${currentPage === page.id
                    ? isDark
                      ? 'bg-white/20 text-white'
                      : 'bg-black/20 text-black'
                    : isDark
                      ? 'hover:bg-white/10 hover:text-white'
                      : 'hover:bg-black/10 hover:text-black'
                    }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{page.name}</span>
                </button>
              );
            })}
          </nav>
        </aside>
      )}

      {/* Main Content */}
      <main className={`pt-20 ${!isMobile ? 'md:ml-64' : ''}`}>
        <div className="container mx-auto px-4 py-8">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}

export default App;
