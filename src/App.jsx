import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainPage } from './components/MainPage/MainPage';
import { GalleryPage } from './components/GalleryPage/GalleryPage';
import { AboutPage } from './components/AboutPage/AboutPage';
import { ExhibitionsPage } from './components/ExhibitionsPage/ExhibitionsPage';
import { ContactsPage } from './components/ContactsPage/ContactsPage';
import './App.scss';
import { DraftsPage } from './components/DraftsPage/DraftsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <GalleryPage />
      <AboutPage />
      <ExhibitionsPage />
      <DraftsPage />
      <ContactsPage />
      <Footer />
    </div>
  );
}

export default App;
