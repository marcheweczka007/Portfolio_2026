import logoImage from 'figma:asset/c786fea75c292a244aa8144109c0551648265bf4.png';
import { Language, translations } from '../translations';

interface HeaderProps {
  onHomeClick?: () => void;
  onProjectsClick?: () => void;
  onProcessesClick?: () => void;
  onAboutClick?: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  currentView?: 'home' | 'projects' | 'project' | 'processes' | 'about';
}

export function Header({ onHomeClick, onProjectsClick, onProcessesClick, onAboutClick, language, onLanguageChange, currentView = 'home' }: HeaderProps) {
  const t = translations[language].nav;
  
  // For project detail pages, consider "projects" as active
  const activeView = currentView === 'project' ? 'projects' : currentView;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-primary/10">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <img 
          src={logoImage} 
          alt="Logo" 
          className="h-11 cursor-pointer hover:opacity-80 transition-opacity" 
          onClick={onHomeClick}
        />
        <div className="flex items-center gap-6">
          <nav className="flex gap-10">
            <a 
              href="#home" 
              onClick={onHomeClick} 
              className={`text-sm transition-colors relative group cursor-pointer ${
                activeView === 'home' 
                  ? 'text-foreground' 
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              {t.home}
              <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all ${
                activeView === 'home' ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </a>
            <a 
              onClick={onProjectsClick} 
              className={`text-sm transition-colors relative group cursor-pointer ${
                activeView === 'projects' 
                  ? 'text-foreground' 
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              {t.projects}
              <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all ${
                activeView === 'projects' ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </a>
            <a 
              onClick={onProcessesClick} 
              className={`text-sm transition-colors relative group cursor-pointer ${
                activeView === 'processes' 
                  ? 'text-foreground' 
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              {t.processes}
              <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all ${
                activeView === 'processes' ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </a>
            <a 
              onClick={onAboutClick} 
              className={`text-sm transition-colors relative group cursor-pointer ${
                activeView === 'about' 
                  ? 'text-foreground' 
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              {t.about}
              <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all ${
                activeView === 'about' ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </a>
          </nav>
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 p-1">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-3 py-1 rounded-full text-sm transition-all ${
                language === 'en'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('pl')}
              className={`px-3 py-1 rounded-full text-sm transition-all ${
                language === 'pl'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              PL
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}