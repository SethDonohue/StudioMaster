import React, { Component } from 'react';

import NavBar from './home/nav_bar.jsx';
import Hero from './home/hero.jsx';
import Features from './home/features.jsx';
import Footer from './footer/footer_main.jsx';


class App extends Component { // Home Page Component! Edit Me!
  render() {
    return (
      <div>
          <nav>
            <NavBar />
          </nav>
          <main>
            <Hero />
            <Features />
          </main>
          <footer>
            {/* <Footer /> */}
            FOOTER
          </footer>
      </div>
    );
  }
}

export default App;
