import React, { Component } from 'react';

import Buffer from "./boxes/buffer";

import NavBar from './navs/nav_bar.jsx';
import NavBtn from './navs/nav_btn.jsx';
import Hero from './home/hero.jsx';
import Features from './home/features.jsx';
import Footer from './footer/footer_main.jsx';


class App extends Component { // Home Page Component! Edit Me!
  render() {
    return (
      <div>
          <nav>
            <NavBar />
            <NavBtn />
          </nav>
          <main>
            <Buffer />
            <Hero />
            <Features />
          </main>
          
          <Footer />
      </div>
    );
  }
}

export default App;
