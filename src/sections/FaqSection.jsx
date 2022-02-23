import React from 'react';
//
import styled from "styled-components";
import {Wrapper} from "../styles/Layout";

const FaqSection = () => {
    return (
        <Faq>
            <h2> Qualche domanda <span>FAQ?</span></h2>
            <div className="question">
                <h4>Come Ho Iniziato?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, maxime?</p>
                </div>
                <div className="faq-line" />
            </div>
            <div className="question">
                <h4>Programma Giornaliero?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, maxime?</p>
                </div>
                <div className="faq-line" />
            </div>
            <div className="question">
                <h4>Pagamento Diverso?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, maxime?</p>
                </div>
                <div className="faq-line" />
            </div>
            <div className="question">
                <h4>Quali Prodotti offrite?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, maxime?</p>
                </div>
                <div className="faq-line" />
            </div>
        </Faq>
    );
};

// STYLES

const Faq = styled(Wrapper)`
  display: block;
  
  span {
    display: block;
  }
  
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  
  .faq-line {
    background-color: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  
  .question {
    padding: 3rem;
    cursor: pointer;
  }
  
  .answer {
    padding: 2rem 0;
    
    p {
      padding: 1rem 0;
    }
  }
`

export default FaqSection;
