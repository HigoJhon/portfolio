import React from 'react';
import '../css/Projetos.css';

const Projetos: React.FC = () => {
    return (
        <div className="div-port" id='projetos'>
            <h1>Projetos</h1>
            <div className="projetos">
                <div className="front-end">
                    <h3 className='h3-dev'>Front-end:</h3>
                    <br />
                    <div>
                        <h4>Wallet</h4>
                        <p>
                            Neste projeto desenvolvi uma carteira de controle de gastos com conversor de moedas, o usuario pode ser capaz de:
                            Adicionar, remover e editar um gasto;
                            Visualizar uma tabelas com seus gastos;
                            Visualizar o total de gastos convertidos para uma moeda de escolha;
                        </p>
                        <p>
                            Para acessar o projeto clique
                            <a href="https://higojhon.github.io/Wallet/"> aqui!</a>
                        </p>
                    </div>
                    <br />
                    <div>
                        <h4>Padaria</h4>
                        <p>
                            Este projeto foi desenvolvemos uma pagina we para padaria, 
                            onde o cliente pode ver os produtos e consultar o valor dos mesmos.
                            <br />
                            Este projeto ainda encontrasse em desenvolvimento.
                        </p>
                        <p>
                            Para acessar o projeto clique
                            <a href="https://github.com/HigoJhon/Padaria"> aqui!</a>
                        </p>
                    </div>
                </div>
                <div className="back-end">
                    <br />
                    <br />
                    <h3 className='h3-dev'>Back-end:</h3>
                    <br />
                    <div>
                        <h4>Tabela Brasileirão</h4>
                        <p>
                            Neste projeto contruir o Backend da aplicação, que tem a finalidade de informa sobre as partidas e classificaçoes de futebol.
                            A proposta é a criação de uma API que deve ser consumida por um front-end que ja foi criada, por tanto a criação de um docker-compose foi de suma importancia.
                            <br />
                        </p>
                        <p>
                            Para acessar o projeto clique
                            <a href="https://github.com/HigoJhon/Futebol-Clube"> aqui!</a>
                        </p>
                    </div>
                    <br />
                    <div>
                        <h4>Dragon Fight</h4>
                        <p>Neste projeto usei os principios da arquitetura SOLID e os principios de POO em uma estrutura de um jogo de RPG (Role Playing Game).</p>
                        <p>
                            Para acessar o projeto clique
                            <a href="https://github.com/HigoJhon/Dragon-Fight"> aqui!</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projetos;