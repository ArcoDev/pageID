import React from 'react';
import ArrowR from './arrow-right.png';
import ImgStrategic from './Social-Strategy.svg';

const Process = () => {

    //funcion para realizar la animacion del div de procesos
    const expandirR = () => {
        document.getElementById('strategic').style.width = "100%";
        document.getElementById('strategic').style.position = "absolute";
        document.getElementById('arrow-2').style.display = "none";
        document.getElementById('arrow-3').style.display = "none";
        document.getElementById('design').style.opacity = "0";
        document.getElementById('marketing').style.opacity = "0";
        document.getElementById('analysis').style.opacity = "0";
    }
    return (
        <>
            <div className="process">
                <div id="strategic" className="process-caja div">
                    <div id="cont1" className="div-content">
                        <img src={ImgStrategic} alt=""/>
                        <h1>Plan estratégico</h1>
                        <button>Conoce más</button>
                    </div>
                    
                    <img className="process-arrowR" onClick={() => expandirR() } 
                    src={ArrowR} alt="Arrow Right"/>
                </div>
                <div id="design" className="process-caja div">
                <div className="div-content">
                        <img src={ImgStrategic} alt=""/>
                        <h1>Diseño UI/UX</h1>
                        <button>Conoce más</button>
                    </div>
                    <img id="arrow-2" className="process-arrowR" onClick={() => expandirR() } 
                    src={ArrowR} alt="Arrow Right"/>
                </div>
                <div id="marketing" className="process-caja div">
                <div className="div-content">
                        <img src={ImgStrategic} alt=""/>
                        <h1>Marketing digital</h1>
                        <button>Conoce más</button>
                    </div>
                    <img id="arrow-3" className="process-arrowR" onClick={() => expandirR() } 
                    src={ArrowR} alt="Arrow Right"/>
                </div>
                <div id="analysis" className="process-caja div">
                <div className="div-content">
                        <img src={ImgStrategic} alt=""/>
                        <h1>Análisis y mejora</h1>
                        <button>Conoce más</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Process
