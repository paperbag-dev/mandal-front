import React, { Component } from 'react';
import { Route } from 'react-router';

import Layout from './layouts/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Layout}/>
      </div>
    );
  }
}

export default App;
