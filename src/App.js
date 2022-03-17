import React from 'react';
import { Header } from './components';
import Footer from './components/Footer';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import Register from './components/Register';
function App() {


  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/register" component={Register} exact />
      </div>
      <Footer />
      <hr className="container" />
      <h5 style ={{color: 'gray',display: 'flex',justifyContent: 'center',alignItems: 'center',paddingBottom:40,paddingTop:40}}>Copyright © 2021-2022 Toys Company S.L. All rights reserved.</h5>

    </div>
  );
}

export default App;
