import React  from 'react';
import { Route } from 'react-router';
import Layout from './layouts/Layout';

class App extends React.Component  {
    render() {
        return (
            <div>
                <Route path="/" component={Layout}/>
            </div>
        );
    }
}

export default App;
