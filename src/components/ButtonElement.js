import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
  border-radius: 10px;
  background: ${({ primary }) => (primary ? 'transparent' : '#66fcf1')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
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

  &:hover {
    transition: all 0.2s ease-ease-in-out;
      color: #1f2833;
      border: 2px solid ;

    background: ${({ primary }) => (primary ? '#66fcf1' : '#fff')};
  }
`