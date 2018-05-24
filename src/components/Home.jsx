import React, { Component } from 'react';

import NavBar from './home/nav_bar.jsx';
import HomeDescription from './home/home_description.jsx';
import BottomDescription from './home/bottom_description.jsx';
import Footer from './footer/footer_main.jsx';


class App extends Component { // Home Page Component! Edit Me!
  render() {
    return (
      <div>
          <NavBar />
          <HomeDescription />
          <BottomDescription />
          <Footer />
      </div>
    );
  }
}

export default App;
