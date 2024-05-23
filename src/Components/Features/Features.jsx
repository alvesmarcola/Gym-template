import React, { useState } from 'react';
import Featurebox from './Featurebox';

import imgOne from '../../images/1.svg';
import imgTwo from '../../images/2.svg';
import imgThree from '../../images/3.svg';
import imgFour from '../../images/4.svg';

import './features.css'; // 

const Features = ({ toggleTheme }) => { 
    return (
        <div id='features'>
            <h1>Serviços</h1>
            <div className="a-container">
                <Featurebox image={imgOne} title="Avaliação Física" description="Descubra seu ponto de partida e trace sua jornada para o sucesso." />
                <Featurebox image={imgTwo} title="Treinos Funcionais" description="Descubra a versatilidade do treino funcional." />
                <Featurebox image={imgThree} title="Musculação Personalizada" description="Molde seu corpo conforme seus desejos." />
                <Featurebox image={imgFour} title="Cardio Energizante" description="Fortaleça seu ritmo cardíaco." />
            </div>
        </div>
    );
};

export default Features;
