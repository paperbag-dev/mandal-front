import React, {ReactNode} from 'react';
import {Route} from 'react-router';

import {Main} from 'pages';
import Board from '../../src/pages/board/index';

export default class Layout extends React.Component {
  render(): ReactNode {
    return (
      <div>
        <div>
          <Route exact path="/" component={Main}/>
          <Route exact path="/another" component={Board}/>
        </div>
      </div>
    );
  }
}
