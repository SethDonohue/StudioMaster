import React, { Component } from 'react';

import NavBar from './home/nav_bar';
import HomeDescription from './home/home_description';
import BottomDescription from './home/bottom_description';


class App extends Component { // Home Page Component! Edit Me!
  render() {
    return (
      <div>
          <NavBar />
          <HomeDescription />
          <BottomDescription />
      </div>
    );
  }
}

export default App;
