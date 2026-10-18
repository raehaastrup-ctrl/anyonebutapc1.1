import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ManifestoPage } from './pages/ManifestoPage';
import { ActionHubPage } from './pages/ActionHubPage';
import { AboutPage } from './pages/AboutPage';
import { IssuesPage } from './pages/IssuesPage';
import { DemocracyPage } from './pages/DemocracyPage';
import { EvidencePage } from './pages/EvidencePage';
import { WritePage } from './pages/WritePage';
import { UpdatesPage } from './pages/UpdatesPage';
import { PartyContactPage } from './pages/PartyContactPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { EditorialPolicyPage } from './pages/EditorialPolicyPage';
import { LaunchChecklistPage } from './pages/LaunchChecklistPage';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#/', '').replace('#', '') as PageId;
    const validPages: PageId[] = [
      'home',
      'manifesto',
      'action',
      'about',
      'issues',
      'democracy',
      'evidence',
      'write',
      'updates',
      'party-contact',
      'contact',
      'privacy',
      'editorial',
      'checklist'
    ];
    return validPages.includes(hash) ? hash : 'home';
  });

  useEffect(() => {
    document.getElementById('main-content')?.focus({ preventScroll: true });
    window.scrollTo({top: 0, behavior: 'instant'});
  }, [currentPage]);

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'manifesto',
        'action',
        'about',
        'issues',
        'democracy',
        'evidence',
        'write',
        'updates',
        'party-contact',
        'contact',
        'privacy',
        'editorial',
        'checklist'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : `/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'manifesto':
        return <ManifestoPage onNavigate={handleNavigate} />;
      case 'action':
        return <ActionHubPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'issues':
        return <IssuesPage onNavigate={handleNavigate} />;
      case 'democracy':
        return <DemocracyPage onNavigate={handleNavigate} />;
      case 'evidence':
        return <EvidencePage onNavigate={handleNavigate} />;
      case 'write':
        return <WritePage onNavigate={handleNavigate} />;
      case 'updates':
        return <UpdatesPage onNavigate={handleNavigate} />;
      case 'party-contact':
        return <PartyContactPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'privacy':
        return <PrivacyPolicyPage onNavigate={handleNavigate} />;
      case 'editorial':
        return <EditorialPolicyPage onNavigate={handleNavigate} />;
      case 'checklist':
        return <LaunchChecklistPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#080808]">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main id="main-content" className="flex-1" tabIndex={-1}>
        {renderPage()}
      </main>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-[#080808] text-white hover:bg-[#E30613] transition-colors border-2 border-white shadow-xl cursor-pointer tap-target flex items-center justify-center"
          aria-label="Scroll back to top of page"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
