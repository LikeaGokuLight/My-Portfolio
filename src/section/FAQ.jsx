import React from 'react';

const Answer = ({ title, answer_one, answer_two }) => {
    return (
        <div className={'question'}>
            <h4>{title}</h4>
            <div className="answer">
                <p>{ answer_one }</p>
                <p>{ answer_two }</p>
            </div>
        </div>
    )
}

const FAQ = () => {
    return (
        <div className={'faq'}>
            <h2> Qualche domanda <span>FAQ?</span> </h2>
            <Answer title={'Come Ho Iniziato?'} answer_one={'Lorem ipsum dolor sit amet.'} answer_two={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />
            <Answer title={'Programma Giornaliero?'} answer_one={'Lorem ipsum dolor sit amet.'} answer_two={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />
            <Answer title={'Pagamento Diverso?'} answer_one={'Lorem ipsum dolor sit amet.'} answer_two={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />
            <Answer title={'Quali Prodotti offrite?'} answer_one={'Lorem ipsum dolor sit amet.'} answer_two={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />
        </div>
    );
};

export default FAQ;
