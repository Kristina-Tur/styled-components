import React from 'react';
import styled from 'styled-components';
import {StyledBtn} from './components/StyledBtn.styled';
import {Link} from './components/Link.styled';
import {Menu} from './components/Menu.styled';
import {myTheme} from './styles/Theme.styled';

function App() {
    return (
        <div className="App">
            <Menu>
                <ul>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                </ul>

            </Menu>
            <Box>
                {/*<StyledBtn color={"red"} fontSize={"20px"}>Hello</StyledBtn>
                <StyledBtn>Hello</StyledBtn>
                <SuperButton>SuperButton</SuperButton>
                <StyledBtn as="a" href={"#"}>Hello</StyledBtn>
                <StyledBtn as={Link} href={"#"}>Hello</StyledBtn>*/}
                    <StyledBtn typeBtn={'primary'} active >Hello</StyledBtn>
                    <StyledBtn typeBtn={'outlined'} >Hello</StyledBtn>

            </Box>
        </div>
    );
}

export default App;
const Box = styled.div`
  display: flex;
  height: 50vh;
  background-color: bisque;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`




