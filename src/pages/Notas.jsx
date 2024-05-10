import React, { useState, useEffect } from 'react'
import { useLoaderData, useNavigation, useSearchParams, Link } from 'react-router-dom';
import AOS from 'aos'
import exit from '../multimedia/exit.svg'
import search from '../multimedia/search.svg'

const Notas = () => {
  
  //aca voy a guardar las notas que traigo con fetch
  const notas = useLoaderData();

  //todas las notas menos la última + arreglo invertido
  const previas = notas.slice(0, notas.length-1);
  const previasrev = previas.reverse();

  //última nota
  const ultima = notas[notas.length-1];

  /* ID NOTAS (PARA LINKS) */
  const idArray = notas.map((item) => {
    return item._id   
  });
  const idUltima = idArray[idArray.length-1];

  //AOS
  useEffect(() => {
    AOS.init();
  }, []);
  

  /* FILTROS */
  const handleCategory = (categoria) => {
    setSearchParams({ nota: categoria });
  }

  /* BUSCADOR  */
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(''); 

  //input
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  //notas filtradas - sin filtro
  const [filtradas, setFiltradas] = useState(notas);

  //actualizar parametros de busqueda con el submit (enter)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ nota: searchValue });
  };

  //actualizar las notas si cambian en la BD
  useEffect(() =>{
    setFiltradas(notas);
  }, [notas]);

  //actualizar las notas si cambian los parámetros de búsqueda
  useEffect(() => {
    const notasFiltradas = notas.filter((item) => {

      let filter = searchParams.get('nota');
      
      const fieldsToCheck = [
        item.title.toLowerCase(),
        ...item.author.map((autor) => autor.firstname.toLowerCase()),
        ...item.author.map((autor) => autor.lastname.toLowerCase()),
        ...item.categorias.map((categoria) => categoria.toLowerCase()),
        ...item.keywords.map((keyword) => keyword.toLowerCase())
      ];
      
      if(!filter) {
        return filtradas;
      } else {
        return fieldsToCheck.some((field) => field.startsWith(filter.toLowerCase()));
      }
    }).map((item) => {
      return item;
    })

    setFiltradas(notasFiltradas);
    
  },[searchParams, notas])

  /* LOADING */
  const navigation = useNavigation();

  /* NOTAS ANTERIORES */
  const deleteFilter = () =>{
    setSearchParams('');
  }

  return (
    <>
      <div className='container__notas'>
        <>
          { navigation.state === 'loading' ? 
            <div className='container-loader'>
              <div className='loader'></div>
            </div>
            :
            <div className='notas'>
                  {/* <!-- ÚLTIMA NOTA --> */}
                  <main>
                      <h2>Última nota</h2>
                      <article className="notaprincipal">
                          <div className="notaprincipal__container">
                              <h4 className='notaprincipal__container-titulo'>{ultima.title}</h4>
                              {ultima.author.map((item) => (
                                <h5 className="notaprincipal__container-autor" key={item.firstname}>{item.firstname + ' ' + item.lastname}</h5>
                              ))}
                              <p className='notaprincipal__container-body'>{ultima.body[0].parrafo}</p>
                              <Link to={`/notas/nota/${idUltima}`}>
                                <div className='notaprincipal__container-btn'>
                                  <p>Leer nota completa</p>
                                </div>
                              </Link>
                          </div>  
                          <img src={`https://intuitive-adventure-production.up.railway.app/${ultima.image}`} alt={ultima.title} className='notaprincipal__img'/>
                      </article>
                  </main>

                  {/* NOTAS ANTERIORES */}
                  {
                  filtradas.length === notas.length ? 
                    <div className='anteriores__titulo'>
                      <h2 onClick={deleteFilter}>Notas anteriores</h2> 
                      <img src={search}/>
                    </div>
                    :
                    <div className='anteriores__titulo'>
                      <h2 onClick={deleteFilter}>Notas anteriores {'> '}<span>{searchParams.get('nota')}</span></h2>
                      <img src={search}/>
                    </div>
                  }
                  <div className='cards'>
                    { filtradas.length === notas.length ?
                      previasrev.map((item) => (
                        <Link to={`/notas/nota/${item._id}`}>
                        <div className='cards__card' data-aos='fade-up' data-aos-anchor-placement='top-bottom' key={item.title}>
                          <img src={`https://intuitive-adventure-production.up.railway.app/${item.image}`} alt={item.title} className='cards__card-img'/>
                          <div className='cards__card-container'>
                            <h4 className='cards__card-title'>{item.title}</h4>
                            {item.author.map((item) => (
                                  <h5 className='cards__card-autor' key={item.firstname}>{item.firstname + ' ' + item.lastname}</h5>
                                ))}
                            <p className='cards__card-body'>{item.body[0].parrafo}</p>
                            <div className='cards__card-btn'>
                              <p>Leer nota completa</p>
                            </div>
                          </div>
                        </div>
                        </Link>
                      )) :
                      filtradas.map((item) => (
                        <Link to={`/notas/nota/${item._id}`}>
                        <div className='cards__card' data-aos='fade-up' data-aos-anchor-placement='top-bottom' key={item.title}>
                          <img src={`https://intuitive-adventure-production.up.railway.app/${item.image}`} alt={item.title} className='cards__card-img'/>
                          <div className='cards__card-container'>
                            <h4 className='cards__card-title'>{item.title}</h4>
                            {item.author.map((item) => (
                                  <h5 className='cards__card-autor' key={item.firstname}>{item.firstname + ' ' + item.lastname}</h5>
                                ))}
                            <p className='cards__card-body'>{item.body[0].parrafo}</p>
                            <div className='cards__card-btn'>
                              <p>Leer nota completa</p>
                            </div>
                          </div>
                        </div>
                        </Link>
                      ))
                    }
                  </div>
            </div>
          }
        </>
        <div className='filter'>
                <form onSubmit={handleSearchSubmit}>
                  <input
                    type='text'
                    placeholder='Buscar nota...'
                    className='filter__buscar'
                    value={searchValue}
                    onChange={handleChange}
                  />
                </form>
                <hr className='filter__hr'/>
                <h6 className='filter__categorias'>Categorías</h6>
                <div className='filter__categorias-container'>
                  <p className='filter__categorias-categoria' onClick={() => handleCategory('Antropología Biológica')}>Antropología Biológica</p>
                  <p className='filter__categorias-categoria' onClick={() => handleCategory('Antropología Social')}>Antropología Social</p>
                  <p className='filter__categorias-categoria' onClick={() => handleCategory('Arqueología')}>Arqueología</p>
                  <p className='filter__categorias-categoria' onClick={() => handleCategory('Bioarqueología')}>Bioarqueología</p>
                  <p className='filter__categorias-categoria' onClick={() => handleCategory('Filosofía')}>Filosofía</p>
                  <p className='filter__categorias-categoria' onClick={() => handleCategory('Ecología')}>Ecología</p>
                  <p className='filter__categorias-categoria' onClick={() => handleCategory('Epistemología')}>Epistemología</p>
                  <p className='filter__categorias-categoria' onClick={() => handleCategory('Historia')}>Historia</p>
                  <p className='filter__categorias-categoria' onClick={() => handleCategory('Off-topic')}>Off-topic</p>
                </div>
                { filtradas.length === notas.length ? null :
                  <div className='filter__filtro-container'>
                    <p className='filter__filtro-p'>{searchParams.get('nota')}</p>
                    <img src={exit} alt='Delete' onClick={deleteFilter}/>
                  </div>
                }
        </div>
      </div>
    </>
  )
}

export default Notas