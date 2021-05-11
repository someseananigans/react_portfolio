import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
  border-radius: 10px;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  border: 2px solid #f7f8fa;
  color: #f7f8fa;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  /* border: none; */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-ease-in-out;
  border: 2px solid ;
  
  
  background: ${({ primary }) => (primary ? 'transparent' : '#66fcf1')};
  &:hover {
    background: ${({ primary }) => (primary ? '#66fcf1' : '#fff')};
    color: #1f2833;
    /* color: ${({ dark }) => (dark ? '#010606' : '#fff')}; */
    transition: all 0.2s ease-ease-in-out;
  }
`