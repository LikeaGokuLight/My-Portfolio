import React from 'react';
//
import {GiFullPizza} from 'react-icons/gi';
import Guy from '../assets/img/guy.jpg';
//
import {MyButton} from "../styles/CustomButtons";
import { Wrapper, Description, Hide, Image } from "../styles/Layout";
import styled from "styled-components";

const AboutSection = () => {
    return (
        <Wrapper>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>Io sono Vitali,</h2>
                    </Hide>
                    <Hide>
                        <h2>sono un <span>front-end</span> web developer</h2>
                    </Hide>
                    <Hide>
                        <h2>con sede a Napoli</h2>
                        <GiFullPizza />
                    </Hide>
                </div>
                <p>Contatta sei hai bosogno di un sito o una aplicazizone </p>
                <MyButton>Contatta</MyButton>
            </Description>
            <Image>
                <img src={Guy} alt="Just a guy."/>
            </Image>
        </Wrapper>
    );
};

// STYLES




export default AboutSection;
