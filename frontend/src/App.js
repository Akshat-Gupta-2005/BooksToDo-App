import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';

import HomePage from './pages/HomePage/homePage';
import SearchPage from './pages/SearchPage/searchPage';
import AboutPage from './pages/AboutPage/aboutPage';
import ContactPage from './pages/ContactPage/contactPage';

function App() {
  return (
    <>
      <Router >
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

