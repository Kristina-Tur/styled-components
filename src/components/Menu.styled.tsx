import styled from 'styled-components';
export const Menu = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    padding: 0;
  }
  
  li > a{
    color: chocolate;
  }
  
  li + li{
    margin-left: 20px;
  }
`