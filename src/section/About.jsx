import React from 'react';
//
import UomoInCamicia from '../assets/img/uomoInCamicia.jpg';

const About = () => {
    return (
        <div>
            <div className={'description'}>
                <div className={'title'}>
                    <div className={'hide'}>
                        <h2>Mi chiamo Vitali.</h2>
                    </div>
                    <div className={'hide'}>
                        <h2>E sono un <span>front-end</span> developer</h2>
                    </div>
                    <div className={'hide'}>
                        <h2>verita</h2>
                    </div>
                </div>
                <p>Contatta sei hai bosogno di un sito o una aplicazizone </p>
                <button>
                    Contatta
                </button>
            </div>
            <div className={'image'}>
                <img src={UomoInCamicia} alt="uomo in camicia" width={150}/>
            </div>
        </div>
    );
};

export default About;
