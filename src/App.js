import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import ReactNative from './components/ReactNative';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const appStyle = {
    fontFamily: 'Rajdhani, sans-serif',
  };

  return (
    <div style={appStyle}>
      <Navbar />
      <Header />
      <About />
      <Services />
      <ReactNative />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
