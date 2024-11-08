import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
import { LiaDeviantart } from "react-icons/lia";
import { FaBookDead } from "react-icons/fa";
import { TbGpsFilled } from "react-icons/tb";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaArrowAltCircleDown } from "react-icons/fa";
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);




return (
    <section ref={scrollTab} className='home'>
        <div className="content">

        <div className='txt-informacao-site'>
            <h1>Em desenvolvimento</h1>
        </div>

    <div className="name">
        MEU NOME É <span>PEDRO</span>
    </div>
    <div className="des">
        Sou graduado em Redes de Computadores e atualmente curso Engenharia de Software. Tenho experiência diversificada no setor de tecnologia, atuando em diferentes áreas, desde o desenvolvimento de software até o gerenciamento de infraestruturas de TI. Ao longo da minha carreira, já trabalhei em diversas frentes tecnológicas, adquirindo uma visão ampla e integrada dos desafios e soluções no mundo da tecnologia.
    </div>

    <a href="/demovc.pdf" target="_blank" rel="noopener noreferrer" className='animation active' style={{ display: 'flex', alignItems: 'center' }}>
    Download Currículo 
    <FaArrowAltCircleDown className='iconreact' style={{ marginLeft: '8px' }} />
</a>

</div>
        <div className="avatar">
    <div className="card">
        <img src="/logo-pedro.png" alt="Logo Pedro" />
        <div className="info">
            <div className="info-item">
                <LiaDeviantart className='iconreact' />
                DEV FRONT/BACK
            </div>
            <div className="info-item">
            <FaBookDead className='iconreact' />
                CST REDES
            </div>
            <div className="info-item">
                <TbGpsFilled className='iconreact' />
                Brasil
            </div>

            <div className="info-item">
                < IoPersonCircleSharp className='iconreact' />
                22 anos
            </div>


        </div>
    </div>
</div>
    </section>
    )
}

export default Home
