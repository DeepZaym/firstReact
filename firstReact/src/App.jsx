import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CardProduk from "./components/Card.jsx";
import mieGoreng from "./img/MieGorengJagoan.jpg";
import nasgorSosis from "./img/NasiGorengSosis.jpg";
import nasgorTelur from "./img/NasiGorengTelur.jpg";


import "./App.css";

function App() {
  const produkList = [
    {
      name: "Nasi Goreng Sosis",
      price: "10.000",
      description:
        "Nasi goreng dengan topping sosis dan kerupuk",
      image: nasgorSosis,
    },
    {
      name: "Nasi Goreng Telur",
      price: "10.000",
      description:
        "Nasi goreng dengan topping telur dan kerupuk",
      image: nasgorTelur,
    },
    {
      name: "Mie Jagoan",
      price: "10.000",
      description: "Mie ayam gurih dengan bakso sapi kenyal dan sawi segar.",
      image: mieGoreng,
    },
  ];

  return (
    <>
      <Header />
      <div className="main-content">
        <h1>Selamat Datang di Website NOM!</h1>
        <h2>Rasa Abadi Kaum Muda, Always NOM!</h2>
      </div>

      <div className="produk-container">
        {produkList.map((produk, index) => (
          <CardProduk
            key={index}
            name={produk.name}
            price={produk.price}
            description={produk.description}
            image={produk.image}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App;
