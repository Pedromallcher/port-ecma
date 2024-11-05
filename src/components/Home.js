import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);



return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
               MEU NOME É <span>PEDRO</span>
            </div>
            <div className="des">
                {/* 30 */}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores officiis beatae repellendus rem ullam, ipsam nemo dolorem dolorum illo laborum. Ea sed dolor ab qui, doloremque accusantium esse blanditiis possimus!
            </div>
            
            <a href="/democv.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/logo-pedro.png" alt="" />
                <div className="info">
                    <div>Desenvolvedor</div>
                    <div>Brasil </div>
                    <div>02/12</div>
                    <div></div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
