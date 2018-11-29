import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContaner from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';
const App = () => {
  return (
    <div>
      <HeaderContainer />
      <CardContaner />
      <Footer />
    </div>
  );
};

export default App;
