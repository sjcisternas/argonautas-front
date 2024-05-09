import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getNotasFetch } from '../api/getNotasFetch'
import NotasHome from '../components/NotasHome'
import AOS from 'aos'

const Home = () => {

  //aca voy a guardar las notas que traigo con fetch
  const [notas, setNotas] = useState([]);
  const [loading, setLoading] = useState(true);

  
  

	//declaro el fetch
  const fetchNotas = async () => {
      try{
        const data = await getNotasFetch();
        
        //sacar ultimas dos notas y mandarlas al reves para que la última se muestre primero
        const ultimas = data.slice(-2);
        setNotas(ultimas.reverse());
        
        setLoading(false);
      } catch (err) {
        console.log('Error al obtener las notas', err);
      }
  }

  //ejecuto fetch
	useEffect(() => {
    fetchNotas();
	},[]);

  //AOS
  AOS.init();

  return (
    <>
      <main className="main">
        <section className="main__notas">
          <h2 className="main__notas-titulo">Últimas notas</h2>
          <div className="main__notas-container">
            {loading ?
              <div className='main__notas-container-loader'>
                <div className='main__notas-loader'></div>
              </div> :
              <>
                {notas.map((item) => (
                  <NotasHome item={item}/>
                ))}
              </>
            }              
          </div>
        </section>
      </main>
      <section className='colaborar' data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
        <h4 className='colaborar__titulo'>El conocimiento se construye en comunidad</h4>
        <p className='colaborar__p'>Ayudanos a mantener a flote el bote de Argonautas. ¿Cómo? Muy fácil, haciendo tu donación pasaras a ser un Aportante, formando parte del Club de Argonautas. Quienes formen parte del Club tendran acceso exclusivo a material inédito de Antropología y Confusión y muchos otros beneficios más.</p>
        <div className='colaborar__btn'>
          <Link to='/sumate'>Quiero ser un Aportante</Link>
        </div>
      </section>
    </>
  )
}

export default Home