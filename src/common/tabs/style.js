import styled from 'styled-components';

export const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 48px;
  background: #fff;
  border-top: .5px solid #d8d8d8;
  display: flex;
  justify-content: space-around;

  ul {
    width: 100%;
    display: flex;
    align-items: center;
  }

  li {
    width: 33.333%;
    text-align: center;
  }

  a {
    display: flex;
    flex-flow: column;
    font-size: 12px;
  }

  i {
    font-size: 20px;
    margin-bottom: 5px;
  }

  .active {
    color: #f03d37;
  }
`
