import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import arriba from '../multimedia/arriba.png'
import volver from '../multimedia/volver.png'
import logo from '../multimedia/logo.png'
import ProgressBar from '../components/ProgressBar'

const Nota = () => {
    const {nota} = useLoaderData()
    const {title, author, body, image, fuentes} = nota;
    
    

  return (
    <>
        <ProgressBar/>
        <main className='portada' id='portada'>
            <div className='portada__container'>
                <Link to='#' onClick={() => window.history.back()}>
                    <div className='portada__container-volver'>
                        <img src={volver} alt="Volver" />
                        <p>Volver</p>
                    </div>
                </Link>
                <h4 className='portada__container-titulo'>{title}</h4>
                {author.map((item) => (
                    <p className='portada__container-autor' key={item._id}>{item.firstname + ' ' + item.lastname}</p>
                ))}
            </div>
            <img src={logo} alt="" className='portada__logo'/>
            <img src={`https://intuitive-adventure-production.up.railway.app/${image}`} alt={title} className='portada__img'/>
        </main>
        <article className='notabody'>
            {body.map((item) => (
                    item.parrafo ?
                    <p className='notabody__parrafo' key={item._id}>{item.parrafo}</p> :
                    /* item.image ?  */
                    <h6 className='notabody__subtitulo' key={item._id}>{item.subtitulo}</h6> /* : */
                    /* <div className='notabody__container'>
                        <img src={`http://localhost:4000/${item.image.url}`} alt={item.image.pie} className='notabody__imagen' key={item._id}/>
                        <p className='notabody__imagen-pie'>{item.image.pie}</p>
                    </div> */
                ))}
        </article>
        <div className='bibliografia'>
            <h6 className='bibliografia__titulo'>Bibliografía y fuentes</h6>
            <ul className='bibliografia__ul'>
                {fuentes.map((item) => (
                    <li className='bibliografia__li'>{`${item.author + ' (' + item.year + ') ' + item.titleAndSource}`}</li>
                ))}
            </ul>
        </div>
        <div className='arriba'>
            <Link to='#portada'>
                <img src={arriba} alt="Arriba"/>
            </Link>
        </div>
    </>
  )
}

export default Nota