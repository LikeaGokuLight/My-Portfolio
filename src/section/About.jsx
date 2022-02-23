import React from 'react';
//
import UomoInCamicia from '../assets/img/uomoInCamicia.jpg';
//
import {GiFullPizza, GiVolcano} from 'react-icons/gi'
//
import styled from "styled-components";

const About = () => {
    return (<Styled_About_Wrapper>
            <Styled_Description>
                <Styled_Title>
                    <Styled_Hide>
                        <h2>Io sono Vitali,</h2>
                    </Styled_Hide>
                    <Styled_Hide>
                        <h2>sono un <span>front-end</span> web developer</h2>
                    </Styled_Hide>
                    <Styled_Hide>
                        <h2>con sede a Napoli</h2>
                        <GiFullPizza />
                    </Styled_Hide>
                </Styled_Title>
                <p>Contatta sei hai bosogno di un sito o una aplicazizone </p>
                <Styled_Button>
                    Contatta
                </Styled_Button>
            </Styled_Description>
            <Styled_Image>
                <img src={UomoInCamicia} alt="uomo in camicia"/>
            </Styled_Image>
        </Styled_About_Wrapper>);
};

// Styles
const Styled_About_Wrapper = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`

const Styled_Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  
  h2 {
    font-weight: lighter;
  }
`

const Styled_Hide = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  
  svg {
    font-size: 4rem;
    margin-left: 1rem;
  }
  
  span {
    color: #C1F4C5;
  }
`

const Styled_Button = styled.button`
  align-items: center;
  border: 2px #C1F4C5 solid;
  background-color: #082032;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
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

const Styled_Title = styled.div`
  display: flex;
  flex-direction: column;

  span {
    display: inline-flex;

    svg {
      position: relative;
      top: 10px;
      left: 10px;
    }
  }
`

const Styled_Image = styled.div`
  flex: 1;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`

export default About;
