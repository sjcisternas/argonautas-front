import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../multimedia/logo_sombra.png'
import menu from '../multimedia/hamburgermenu.svg'
import exit from '../multimedia/x-lg.svg'

const Navbar = () => {
  
  //funcion abrir menu

  const [displayMenu, setDisplayMenu] = useState({});
  const [shadow, setShadow] = useState ({});
  const handleMenu = () => {
    setDisplayMenu({right: '0', boxShadow: '0 0 0 100vmax rgba(0, 0, 0, .7)'});
    setShadow({});
  }

  //funcion cerrar menu
  const handleExit = () => {
    setDisplayMenu({});
    setShadow({});
  }

  return (
    <>
      <header className="header" style={shadow}>
        <div className="header__logocontainer">
            <img src={logo} alt="Logo"/>
            <h1>Argonautas del Atlántico Sur</h1>
        </div>
        <img src={menu} className='header__menu' onClick={handleMenu}/>
        <div className="header__navbar">
            <Link to="/" className="header__navbar-item">Inicio</Link>
            <Link to="/proyectos" className="header__navbar-item">Proyectos</Link>
            <Link to="/nosotros" className="header__navbar-item">Nosotros</Link>
            <Link to="/notas" className="header__navbar-item">Notas</Link>
            <Link to="/sumate" className="header__navbar-item">Sumate</Link>
        </div>
      </header>
      <div className='menuopen' style={displayMenu}>
        <img src={exit} alt="Exit" className="menuopen__exit" onClick={handleExit}/>
        <div className="menuopen__nav">
          <Link to='/'className="menuopen__nav-item" onClick={handleExit}>Inicio</Link>
          <Link to='/proyectos' className="menuopen__nav-item" onClick={handleExit}>Proyectos</Link>
          <Link to='/nosotros' className="menuopen__nav-item" onClick={handleExit}>Nosotros</Link>
          <Link to='/notas' className="menuopen__nav-item" onClick={handleExit}>Notas</Link>
          <Link to='/sumate' className="menuopen__nav-item" onClick={handleExit}>Sumate</Link>
        </div>
      </div>
  </>
  )
}

export default Navbar