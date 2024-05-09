import React, { useEffect, useState } from 'react'

const ProgressBar = () => {
    const [scrollPercentage, setscrollPercentage] = useState(0);

    useEffect(()=>{

        const handleScroll = () => {
            const windowHeight = window.innerHeight; //OBTENGO ALTURA DE PANTALLA
            const documentHeight = document.body.scrollHeight; //OBTENGO LA ALTURA DEL DOCUMENTO HTML
            const scrollY = window.scrollY; //OBTENGO LOS PIXELES QUE SE DESPLAZÓ VERTICALMENTE EN EL DOCUMENTO

            const scrollPercent = ((scrollY / (documentHeight - windowHeight))*100);
            
            setscrollPercentage(scrollPercent);
        }

        window.addEventListener("scroll", handleScroll);

        return()=>{
            window.removeEventListener("scroll",handleScroll);
        }
    })
    
    return (
        <div className="progressBar" >
            <div className='bar' style={{width: `${scrollPercentage}%`}}></div>
        </div>
    )
}

export default ProgressBar