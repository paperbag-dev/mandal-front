import React, {ReactElement} from 'react';
import {BrowserRouter} from 'react-router-dom';

import App from 'App';

const Root=(): ReactElement  => (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

export default Root;
