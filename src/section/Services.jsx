import React from 'react';
//
import {BsClockHistory} from 'react-icons/bs';
import {GiMoneyStack} from 'react-icons/gi';
import {BiMessageDetail} from 'react-icons/bi';
import {GrPlan} from 'react-icons/gr';
import WebDev from '../assets/img/webdev.jpg';

const Card = ({icon, title, description}) => {
    return (
        <div className="card">
            <div className="icon">
                {icon}
                <h3>{title}</h3>
            </div>
            <p>{description}</p>
        </div>
    )
}


const Services = () => {
    return (
        <div className={'services'}>
            <div className={'description'}>
                <h2>Alta <span>qualita</span> di servizio</h2>
                <div className="cards">
                    <Card icon={<BsClockHistory/>} title={'Eficienza'} description={'Lorem ipsum dolor sit amet.'} />
                    <Card icon={<GrPlan/>} title={'Pianificazione'} description={'Lorem ipsum dolor sit amet.'} />
                    <Card icon={<GiMoneyStack/>} title={'Conveniente'} description={'Lorem ipsum dolor sit amet.'} />
                    <Card icon={<BiMessageDetail/>} title={'Comunicazione'} description={'Lorem ipsum dolor sit amet.'} />
                </div>
            </div>
            <div className={'image'}>
                <img src={WebDev} alt="web developing" width={150}/>
            </div>
        </div>
    );
};

export default Services;
