import React from 'react';
import '../css/Sobre.css';
import Higo from '../assets/Higo.jpeg';

const Sobre: React.FC = () => {
    return (
        <div className='div-sobre' id='sobre'>
            <div className='div-img'>
                <img src={Higo} alt="" />
            </div>
            <div className='div-text'>
                <h3>MUITO PRAZER,</h3>
                <h3 className='h3-color'>SOU O HIGO JHON.</h3>
                <br />
                <p>
                    Sou um desenvolvedor FullStack em constante aprendizado
                    e apaixonado por tecnologia. Atualmente estou cursando
                    Engenharia de Software na Universidade Estacio de Sá.
                </p>
                <br />
                <p>
                    Inicie minha tragetória na programação em 2022, quando
                    resolvi fazer um curso de desenvolvimento web na Trybe,
                    e desde então venho me aperfeiçoando cada vez mais.
                    Tenho conhecimento em:
                    <br />
                    HTML | CSS | JavaScript | TypeScript | React | Node.js. | Docker | MySQL | C# | ASP.NET
                </p>
                <br />
                <div className='div-link'>
                    <a href="https://github.com/HigoJhon">
                        <img width="70" src="data:image/png;base64,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" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/higo-jhon/">
                        <img width="55" src="data:image/png;base64,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" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sobre;