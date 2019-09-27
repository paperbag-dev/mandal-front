import React from 'react';
import { Route } from 'react-router';

import { Main, Another } from 'pages';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <div>
          gnb
                </div>
                <div>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/another" component={Another}/>
                </div>
                <div>footer</div>
            </div>
        )
    }
}
