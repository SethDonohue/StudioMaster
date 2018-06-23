import React, { Component } from 'react';

import NavBar from './navs/nav_bar.jsx';
import NavBtn from './navs/nav_btn.jsx';
import Hero from './home/hero.jsx';
import Features from './home/features.jsx';
import Footer from './footer/footer_main.jsx';
import Player from '../containers/player';


class App extends Component { // Home Page Component! Edit Me!
  render() {
    return (
      <div>
          <nav>
            <NavBar />
            <NavBtn />
          </nav>
          <main>
            <Hero />
            <Features />
          </main>
          
          <Footer />
          <Player />
          
      </div>
    );
  }
}

export default App;
