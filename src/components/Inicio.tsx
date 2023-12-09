import React from "react";
import "../css/Inicio.css";

const Inicio: React.FC = () => {
    return (
        <div className="inicio" id="inicio">
            <h1>BEM VINDO AO MEU PORTFOLIO</h1>
            <br />
            <div className="div-inicio">
                <p>
                    No meu portfolio voce vai poder navegar no sobre mim, e conhecer um pouco mas como entrei no mundo da programação e conhecer minhas habilidades.
                    <br />
                    Ja na aba de projetos voce vai poder ver alguns dos meus projetos, tanto front-end quanto back-end. e caso queira ver o codigo fonte de algum projeto, basta clicar no link que esta na descrição do projeto.
                    <br />
                    E caso queira entrar em contato comigo, basta ir na aba de contato e preencher o formulario. ou se preferir pode me mandar um email ou me chamar no linkedin.
                    <br />
                    Espero que goste do meu portfolio, e curta o conteudo que tem nele.
                </p>
            </div>
        </div>
    );
};

export default Inicio;