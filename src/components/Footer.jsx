import React from 'react'
import facebook from '../multimedia/facebook.svg'
import youtube from '../multimedia/youtube.svg'
import instagram from '../multimedia/instagram.svg'

const Footer = () => {
  return (
    <footer className="footer">
        <p className="footer__derechos">Todos los derechos reservados©</p>
        <div className="footer__container">
            <a href="https://www.facebook.com/mapayterritorio" target='_blank'><img src={facebook} alt="Facebook" className="footer__container-img"/></a>
            <a href="https://www.instagram.com/mapa.territorio/" target='_blank'><img src={instagram} alt="Instagram" className="footer__container-img"/></a>
            <a href="https://www.youtube.com/@mapayterritorio3678" target='_blank'><img src={youtube} alt="Youtube" className="footer__container-img"/></a>
        </div>
    </footer>
  )
}

export default Footer