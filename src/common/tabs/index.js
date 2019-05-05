import React from 'react';
import { Wrapper } from './style';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

class Tabs extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {

    }
  }
  render () {
    const { tabs } = this.props;
    return (
      <Wrapper>
        <ul>
          {
            tabs.map(item => {
              return (
                <li key={item.id}>
                  <NavLink to={`/${item.id}`}>
                  <i className={item.icon}></i>
                  {item.name}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </Wrapper>
    )
  }
}

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired
}

Tabs.defaultProps = {
  tabs: []
}

export default Tabs;
