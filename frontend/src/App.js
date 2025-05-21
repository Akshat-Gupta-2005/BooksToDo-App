import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import HomePage from './views/homePage';
import SearchPage from './views/searchPage';
import AboutPage from './views/aboutPage';
import ContactPage from './views/contactPage';

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

