import React from 'react'
import img1 from '../multimedia/eliseo.png'
import img2 from '../multimedia/inia.png'
import img3 from '../multimedia/pimpi.jpeg'
import img4 from '../multimedia/nacho.jpeg'
import img5 from '../multimedia/cisternas.jpeg'
import img6 from '../multimedia/detzel.png'
import img7 from '../multimedia/mali.png'
import AOS from 'aos';

const Nosotros = () => {

  const nosotros = [
    {
      nombre: 'Eliseo Grisolia',
      rol: 'Edición - Conducción',
      img: img1,
      desripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quas voluptatum voluptatibus quae quos voluptatum quas voluptat',
      id: 1
    },
    {
      nombre: 'Iñaki Garat',
      rol: 'Conducción - Community management',
      img: img2,
      desripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quas voluptatum voluptatibus quae quos voluptatum quas voluptat',
      id: 2
    },
    {
      nombre: 'Joaquín Zucol',
      rol: 'Miembro colaborador',
      img: img3,
      desripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quas voluptatum voluptatibus quae quos voluptatum quas voluptat',
      id: 3
    },
    {
      nombre: 'Nacho Vitale',
      rol: 'Edición - Conducción',
      img: img4,
      desripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quas voluptatum voluptatibus quae quos voluptatum quas voluptat',
      id: 4
    },
    {
      nombre: 'Santiago Cisternas',
      rol: 'Conducción - Diseño y desarrollo',
      img: img5,
      desripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quas voluptatum voluptatibus quae quos voluptatum quas voluptat',
      id: 5
    },
    {
      nombre: 'Santiago Detzel',
      rol: 'Miembro claborador',
      img: img6,
      desripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quas voluptatum voluptatibus quae quos voluptatum quas voluptat',
      id: 6
    },
    {
      nombre: 'Nicolás Malinowski',
      rol: 'Miembro colaborador',
      img: img7,
      desripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quas voluptatum voluptatibus quae quos voluptatum quas voluptat',
      id: 7
    }
  ]

  //AOS
  AOS.init()

  return (
    <>
      <div className='quienes'>
        <h2 className='quienes__titulo'>¿Quienes somos?</h2>
        <p className='quienes__p'>Argonautas es un proyecto de divulgación y comunicación de las ciencias antropologógicas en todas sus formas y colores. Nada mejor que reconocer nuestra diversidad para conocernos a nosotros mismos. La antropología tiende puentes entre distintos mundos, y la divulgación funciona como los cimientos de esos puentes.</p>
        <p className='quienes__p'>Argonautas es contar historias. Es escuchar relatos. Es usar el poder de la curiosidad para imaginar nuevos futuros. Es romper la barrera infranqueable e inaccesible sobre la cual la ciencia se refugió. Es interactuar con la realidad... para transformarla.</p>
      </div>
      <main className='nosotros'>
        {nosotros.map((item) => (
          <div className='nosotros__card' data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
            <h4 className='nosotros__card-titulo'>{item.nombre}</h4>
            <h5 className='nosotros__card-rol'>{item.rol}</h5>
            <div className='nosotros__card-container'>
              <img src={item.img} alt={item.nombre} className='nosotros__card-img'/>
              <p className='nosotros__card-desc'>{item.desripcion}</p>
            </div>
          </div>
        ))}
      </main>
    </>
  )
}

export default Nosotros