import React from 'react';
import Routes from './Routes';
import {BrowserRouter} from 'react-router-dom';
import Header from './modules/header/components/Header';
import Footer from './modules/footer/components/Footer';

const App = () => (
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
);

export default App;