import React from 'react';
//
import {BiTimer, BiMessageRoundedDetail} from 'react-icons/bi';
import {BsCalendarWeek} from 'react-icons/bs';
import {FaRegMoneyBillAlt} from 'react-icons/fa';
//
import LaptopDev from '../assets/img/webdev.jpg';
//
import styled from "styled-components";
import { Wrapper, Description, Image } from "../styles/Layout";

const ServicesSection = () => {
    return (
        <WrapperServices>
            <Description>
                <h2>Alta <span>qualita</span> di servizio.</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <BiTimer/>
                            <h3>Eficienza</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <BsCalendarWeek/>
                            <h3>Pianificazione</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FaRegMoneyBillAlt/>
                            <h3>Conveniente</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <BiMessageRoundedDetail/>
                            <h3>Comunicazione</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={LaptopDev} alt="Laptop dev"/>
            </Image>
        </WrapperServices>
    );
};

// STYLES
const WrapperServices = styled(Wrapper)`
  
  h2 {
    padding-bottom: 5rem;
  }
  
  p {
    width: 70%; 
    padding: 2rem 0 4rem 0;
  }
`

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Card = styled.div`
    flex-basis: 15rem;
  
    .icon {
      display: flex;
      align-items: center;
      
      svg {
        color: white;
        font-size: 2.5rem;
      }
      
      h3 {
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
      }
    }
`

export default ServicesSection;
