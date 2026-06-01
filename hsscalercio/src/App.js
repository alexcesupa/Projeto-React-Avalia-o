import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Quote from './pages/Quote/Quote';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

const routes = {
  inicio: Home,
  produtos: Products,
  orcamento: Quote,
};

function getRouteFromHash() {
  const route = window.location.hash.replace('#/', '') || 'inicio';
  return routes[route] ? route : 'inicio';
}

function App() {
  const [activeRoute, setActiveRoute] = useState(getRouteFromHash);
  const CurrentPage = useMemo(() => routes[activeRoute], [activeRoute]);

  useEffect(() => {
    function handleHashChange() {
      setActiveRoute(getRouteFromHash());
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  function navigate(route) {
    window.location.hash = `/${route}`;
    setActiveRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className={styles.app}>
      <Header activeRoute={activeRoute} onNavigate={navigate} />
      <main>
        <CurrentPage onNavigate={navigate} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
