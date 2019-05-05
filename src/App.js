import React from 'react';
import { Button } from 'antd-mobile';

class Base extends React.PureComponent {
  render () {
    return (
      <div>
        <Button type="primary">点击</Button>
      </div>
    )
  }
}

export default Base
