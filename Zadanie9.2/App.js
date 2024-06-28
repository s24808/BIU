import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const link = () => {
  return new URLSearchParams(useLocation().search);
};

const WrongPage = () => {
    return <h2>Nie znaleziono elementu:</h2>;
  };
  
const Dodawanie = () => {
  const value = link();
  const x = parseFloat(value.get('x'));
  const y = parseFloat(value.get('y'));
  return (
    <h2>Wynik: {x + y}</h2>
  );
};

const Odejmowanie = () => {
  const value = link();
  const x = parseFloat(value.get('x'));
  const y = parseFloat(value.get('y'));
  return (
    <h2>Wynik: {x - y}</h2>
  );
};

const Mnozenie = () => {
  const value = link();
  const x = parseFloat(value.get('x'));
  const y = parseFloat(value.get('y'));
  return (
    <h2>Wynik: {x * y}</h2>
  );
};

const Dzielenie = () => {
  const value = link();
  const x = parseFloat(value.get('x'));
  const y = parseFloat(value.get('y'));
  return (
    <h2>Wynik: {x / y}</h2>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="add" element={<Dodawanie/>} />
        <Route path="sub" element={<Odejmowanie/>} />
        <Route path="mul" element={<Mnozenie/>} />
        <Route path="div" element={<Dzielenie/>} />
        <Route path="*" element={<WrongPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
