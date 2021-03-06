import "./sectionsts.css"
import myImage from "./../../images/myself.png"
import { ProgressBar } from "../progressBar/ProgressBar"
import { MyButton } from "../button/MyButton"

export const SectionSTS = () => {
    return (
    <section id="about" className="pt-5">
        <div className="container">
            <h2 data-aos="fade-right" data-aos-duration="1000" style={{fontSize: `60px`}}><strong>Sobre</strong> Mim</h2>
            <div className="sideToSide">
                <div className="img" data-aos="fade-right" data-aos-duration="1400">
                    <img src={myImage} alt="me" />
                    <div></div>
                </div>
                <div className="text">
                    <h3 data-aos="fade-left" data-aos-duration="1600">Oi, eu sou o <strong>Gabs!</strong></h3>
                    <p data-aos="fade-left" data-aos-duration="2000">Meu nome é Gabriel, tenho 19 anos, moro em Franca-Sp (Brasil). Atualmente estou cursando Análise e Desenvolvimento de Sistemas (Fatec Franca-SP) e fazendo o curso online de desenvolvimento de Games da Danki Code.</p>
                    <div data-aos="fade-left" data-aos-duration="2400">
                        <ProgressBar title="Spring Boot" percentage={90}/>
                        <ProgressBar title="GitHub" percentage={75}/>
                        <ProgressBar title="React Js" percentage={70}/>
                        <ProgressBar title="Bootstrap" percentage={70}/>
                    </div>
                    <br />
                    <div data-aos="fade-left" data-aos-duration="2400">
                        <MyButton text="Contato" link="#contact"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}