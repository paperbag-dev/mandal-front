import React, {ReactNode} from 'react';
import {Route} from 'react-router';
import Layout from './layouts/Layout';

class App extends React.Component  {
  render (): ReactNode {
    return (
      <div>
        <Route path="/" component={Layout}/>
      </div>
    );
  }
}

export default App;
