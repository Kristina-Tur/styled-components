import styled, {css} from 'styled-components';
import {MyAnimation} from '../styles/animations/Animations';

type StyledBtnPropsTypes = {
    color?: string
    fontSize?: string
    typeBtn: 'primary' | 'outlined'
    active?: boolean
}
export const StyledBtn = styled.button<StyledBtnPropsTypes>`
  border: none;
  padding: 10px 20px;
  font-size: ${props => props.fontSize || '2rem'};
  border-radius: 5px;
  
  ${props => props.typeBtn === 'primary' && css<StyledBtnPropsTypes>`
    background-color: ${props => props.color || 'purple'};
    color: snow;

    &:hover {
      background-color: green;
    }
  `}
  
  ${props => props.typeBtn === 'outlined' && css<StyledBtnPropsTypes>`
    border: 1px solid ${props => props.color || 'purple'};
    color: ${props => props.color || 'purple'};
    background-color: transparent;

    &:hover {
      border-color: green;
      color: green;
      background-color: transparent;
    }
  `}
  
  ${props => props.active && css<StyledBtnPropsTypes>`
    box-shadow: 5px 5px 5px 5px #a18e8e;
  `}
  /*&:last-child {
    background-color: green;
  }*/
`

export const SuperButton = styled(StyledBtn)`
  background-color: aqua;
  animation: ${MyAnimation} 2s ease-in-out;
`