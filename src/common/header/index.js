import React from 'react'
import { Wrapper, HeaderH1 } from './style'

class Header extends React.PureComponent {
  render () {
    return (
      <Wrapper>
        <HeaderH1>猫眼电影</HeaderH1>
      </Wrapper>
    )
  }
}

export default Header;
