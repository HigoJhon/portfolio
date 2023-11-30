import React from "react";
import "../css/Contato.css";

const Contato: React.FC = () => {
    return (
        <div className="contato" id="contato"> 
            <h2 className="titulo">FALA COMIGO.</h2>
            <br />
            <form>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="E-mail" />
                <input type="text" placeholder="Assunto" />
                <textarea placeholder="Mensagem"></textarea>]
                <br />
                <button type="submit">Enviar</button>
            </form>
            <br />
        </div>
    );
};

export default Contato;