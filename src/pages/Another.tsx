import React from 'react';
import TestComponentTwo from 'components/TestComponentTwo'

export default class Another extends React.Component {
  render() {
    return (
      <div>
        <h1>another page</h1>
        <TestComponentTwo />
      </div>
    )
  }
}
