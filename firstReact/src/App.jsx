import React from 'react';
import Header from './components/header.jsx';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <h2>Selamat Datang di Website Kami!</h2>
        <p>Ini adalah halaman beranda.</p>
      </div>
    </>
  );
}

export default App;