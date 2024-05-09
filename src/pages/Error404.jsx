import React from 'react'
import {useRouteError} from 'react-router-dom'
import img1 from '../multimedia/travolta.gif'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Error404 = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <>
            <Navbar></Navbar>
            <div className='container'>
                <div className='container__texto'>
                    <h4 className='container__texto-titulo'>¿A dónde vamo'?</h4>
                    <p className="container__texto-p">La página a la que quieres acceder no se encuentra disponible (Error 404). Podés continuar navegando en el sitio de Argonautas desde el menú superior.</p>
                </div>
                <img src={img1} alt="Error 404" className='container__img' />
            </div>
            <Footer></Footer>
        </>
    )
}

export default Error404