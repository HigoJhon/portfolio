import React from "react";
import "../css/Hearder.css";

interface HeaderProps {
    onMenuClick: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    return (
        <header>
            <div className="menu">
                <a href="#inicio" className="span-home">Inicio</a>
                <a href="#sobre" className="span-sobre">Sobre Mim</a>
                <a href="#projetos" className="span-projetos">Projetos</a>
                <a href="#contato" className="span-contato">Contato</a>
            </div>
        </header>
    );
};

export default Header;


