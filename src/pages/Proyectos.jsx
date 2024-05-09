import React from 'react'
import { Link } from 'react-router-dom';
import imagen1 from '../multimedia/podcast.jpg'
import imagen2 from '../multimedia/mtdibujo.jpeg';
import AOS from 'aos'

const Proyectos = () => {

  const urlPodcast = 'https://open.spotify.com/show/4mKDBPL4h1GSDdwN5R7bIL' ;
  const urlRevista = 'https://drive.google.com/drive/folders/19ImMUUkEikKrIgETl4rmdsPv-PjyY6CD';

  //AOS
  AOS.init();

  return (
    <>
      <main className='main__proyectos' data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
        <section class="proyectos__podcast">
          <div className='proyectos__podcast-container'>
            <h4 class="proyectos__podcast-container-titulo">Antropología y Confusión</h4>
            <p class="proyectos__podcast-container-p">Casi terminanda la carrera, un día nos preguntamos desconcertados: "¿Qué es la antropología? ¿Para qué sirve?". Con algo de desaucio, nos dimos cuenta que no estabamos del todo seguros de cómo responder esas preguntas. De alguna manera, todo parecía ser más complejo de lo que eramos capaces de explicar. Entonces surgió "Antropología y Confusión" como un intento de buscar respuestas. "Antropología y Confusión" es un podcast de Antropología para no antropólogos. O eso creemos.</p>
            <div class="proyectos__podcast-container-btn">
              <Link to={urlPodcast} target='_blank'>Escuchar</Link>
            </div>
          </div>
          <img src={imagen1} className='proyectos__podcast-img' alt=''/>     
        </section>
        {/* <section className="proyectos__podcast-MQ">

        </section> */}
      </main>
      <section className='previos'>
        <h3 className='previos__titulo'>Proyectos previos</h3>
        <article className='previos__revista' data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
          <img src={imagen2} className='previos__revista-img' alt=''/> 
          <div className='previos__revista-container'>
            <h4 class="previos__revista-container-titulo">Mapa y Territorio</h4>
            <p class="previos__revista-container-p">Mapa y Territorio (2020-2021) fue una revista de divulgación científica que tiene como objetivo las ciencias socioculturales y biosociales. El proyecto surgió como espacio en el que los lectores podían construir sus propios escenarios para comunicar. La revista recibió artículos de todas partes de Latinoamérica. Si te interesa leernos, podés descargar todos los números acá.</p>
            <div class="previos__revista-container-btn">
              <Link to={urlRevista} target='_blank'>Leer revista</Link>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}

export default Proyectos