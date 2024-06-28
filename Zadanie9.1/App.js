import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

const HomePage = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Services = () => <h2>Services</h2>;
const Contact = () => <h2>Contact</h2>;
const ContactUS = () => <h2>Contact US</h2>;
const ContactPL = () => <h2>Contact PL</h2>;
const ContactDE = () => <h2>Contact DE</h2>;

const WrongPage = () => {
  const location = useLocation();
  return (
    <div>
      <h2>Nie znaleziono elementu: <code>{location.pathname}</code></h2>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home Page</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/contact/us">Contact US</Link></li>
          <li><Link to="/contact/pl">Contact PL</Link></li>
          <li><Link to="/contact/de">Contact DE</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/contact/us" element={<ContactUS/>} />
        <Route path="/contact/pl" element={<ContactPL/>} />
        <Route path="/contact/de" element={<ContactDE/>} />
        <Route path="*" element={<WrongPage/>} />
      </Routes>
    </Router>
  );
};

export default App;