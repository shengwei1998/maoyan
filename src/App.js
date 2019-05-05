import React from 'react';
import { Button } from 'antd-mobile';
import Header from './common/header'

class Base extends React.PureComponent {
  render () {
    return (
      <div>
        <Header></Header>
      </div>
    )
  }
}

export default Base
