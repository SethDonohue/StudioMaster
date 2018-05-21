import React, { Component } from 'react';

import NavBar from './home/nav_bar';
import HomeDescription from './home/home_description'


class App extends Component { // Home Page Component! Edit Me!
  render() {
    return (
      <div>
          <NavBar />
          <HomeDescription />
      </div>
    );
  }
}

export default App;
