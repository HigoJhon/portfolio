import React from 'react';
import Header from '../components/Hearder';
import Sobre from '../components/Sobre';
import Projetos from '../components/Projetos';
import Contato from '../components/Contato';
import Footer from '../components/Footer';
import '../css/Home.css';
import Inicio from '../components/Inicio';

const Home: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <Header onMenuClick={scrollToSection} />
            <br />
            <Inicio />
            <br />
            <Sobre />
            <br />
            <Projetos />
            <br />
            <Contato />
            <br />
            <Footer />
        </div>
    );
};

export default Home;
