import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';

import HomePage from './views/HomePage/homePage';
import SearchPage from './views/SearchPage/searchPage';
import AboutPage from './views/AboutPage/aboutPage';
import ContactPage from './views/ContactPage/contactPage';

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

