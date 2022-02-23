import styled from "styled-components";

export const MyButton = styled.button`
  align-items: center;
  border: 2px #C1F4C5 solid;
  background-color: #082032;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: inline-flex;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 1.1rem;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  //padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  padding: calc(1rem - 1px) calc(2.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;


  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px) scale(1.03);
    background-color: #C1F4C5;
    color: #082032;
    border: 2px white solid;
  }

  &:active {
    background-color: #C1F4C5;
    color: #082032;
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
  }
`