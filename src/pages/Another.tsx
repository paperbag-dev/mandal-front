import React, {ReactNode} from 'react';
import TestComponentTwo from 'components/TestComponentTwo';

export default class Another extends React.Component {
  render (): ReactNode {
    return (
      <div>
        <h1>another page</h1>

        <TestComponentTwo />
      </div>
    );
  }
}
