import styled, {css} from 'styled-components';
import {MyAnimation} from '../styles/animations/Animations';

type StyledBtnPropsTypes = {
    color?: string
    fontSize?: string
    primary?: boolean
    outlined?: boolean
}
export const StyledBtn = styled.button<StyledBtnPropsTypes>`
  border: none;
    //background-color: ${props => props.color || 'purple'};  
  //color: aliceblue;
  padding: 10px 20px;
  //font-size: 2rem;
  font-size: ${props => props.fontSize};

  &:hover {
    background-color: #fff;
  }

/*  &:last-child {
    background-color: green;
  }*/

  ${props => props.primary && css<StyledBtnPropsTypes>`
    background-color: ${props => props.color || 'purple'};
    color: snow;
  `}

  ${props => props.outlined && css<StyledBtnPropsTypes>`
    border: 1px solid ${props => props.color || 'purple'};
    color: ${props => props.color || 'aliceblue'};
    background-color: transparent;
  `}
`

export const SuperButton = styled(StyledBtn)`
  background-color: aqua;
  animation: ${MyAnimation} 2s ease-in-out;
`