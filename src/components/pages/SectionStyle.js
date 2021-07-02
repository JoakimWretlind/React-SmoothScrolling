import { css } from 'styled-components'

export const Sections = css`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
      font-size: 5rem;
      color: #fff;
      text-transform: uppercase;
  }
`;

export const Buttons = css`
margin-top: 3rem;
  padding: .8rem 1.4rem;
  background: #333;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all .3s ease-out;

  &:hover{
      background: #fff;
      color: #333;
  }
`;