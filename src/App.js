import React, { useEffect, useState } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router-dom'; // Removed BrowserRouter import here
import { CartProvider } from './context/CartContext';

// Components
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import TodaySpecial from './components/TodaySpecial/TodaySpecial';
import SweetList from './components/SweetList/SweetList';
import Cart from './pages/cart';
import Checkout from './pages/Checkout';
import Toast from './components/Toast/Toast';
import Footer from './components/Footer/Footer';

function App() {
  const [toast, setToast] = useState(null);
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="app">
      <NavBar />
      
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <TodaySpecial />
            <SweetList />
          </>
        } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
        <Footer />
    </div>
  );
}

export default App;