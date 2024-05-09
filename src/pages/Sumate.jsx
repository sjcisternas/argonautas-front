import React, { useEffect, useState } from 'react'
import { colabFetch } from '../api/colabFetch';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';

const Sumate = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
		name: '',
		lastname: '',
		email: ''
	});

  const [error, setError] = useState({msg: '', id:0});
	const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const res = await colabFetch(formData);
      setError({
        msg: res.msg,
        id: 0
      });
      setSuccess(true);
    }catch(err){
      console.log(err);
      setError({
        msg: err.msg,
        id: err.id
      });
      setSuccess(false);
    }
  }


  //AOS
  AOS.init();

  

  return (
    <>
      <main className='aportes' data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
        <div className='aportes__club'>
          <h2 className='aportes__club-titulo'>Se parte del Club de Argonautas</h2>
          <p className='aportes__club-p'>Tu apoyo es vital para que Argonautas se mantenga a flote. Cada donación cuenta. Unite al Club de Argonautas y se parte del grupo de Aportantes. Ayudanos a que más personas puedan conocer las historias que tenemos para contar.</p>
          <a href='#contacto' className='aportes__club-container-btn'>  
              Quiero ingresar al Club de Argonautas 
          </a>
        </div>
        <div className='aportes__importancia' data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
          <h2 className='aportes__importancia-titulo'>¿Por qué es importante tu aporte?</h2>
          <div className='aportes__importancia-container'>
            <p className='aportes__importancia-p'>Argonautas nace como un proyecto de divulgación hecho a pulmón. Creemos que el conocimiento tiene que ser de libre acceso para todas las peronas. Gracias a tu aporte, podemos:</p>
            <ul className='aportes__importancia-ul'>
              <li className='aportes__importancia-li'>Garantizar acceso GRATUITO a todo Argonautas.</li>
              <li className='aportes__importancia-li'>Hacer que Argonautas crezca, lo que significa contenido de más calidad contado por una voz cada vez más fuerte.</li>
              <li className='aportes__importancia-li'>Mantenernos independientes. Argonautas no depende de nadie, más que de nuestros Aportantes, y eso nos permite mantener nuestra propia voz.</li>
            </ul>
          </div>
        </div>
      </main>
      <section className='beneficios' data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
        <h4 className='beneficios__titulo'>Beneficios del Club de Argonautas</h4>
        <div className='beneficios__container'>
          <ul className='beneficios__container-ul'>
            <li className='beneficios__container-li'>Acceso a material inédito: detrás de escena de Antropología y Confusión, y contenido preliminar de lo que se viene en Argonautas.</li>
            <li className='beneficios__container-li'>Tendrás la posibilidad de conocer a los invitados de Antropología y Confusión y conversar con ellos.</li>
            <li className='beneficios__container-li'>Acceso al Discord del Club de Argonautas, donde creamos un espacio de difusión, discusión, debate y charla en comunidad.</li>
          </ul>
        </div>
      </section>
      <section className='contacto' id='contacto'>
        <form className='contacto__form' onSubmit={handleSubmit}>
          <p className='contacto__form-p'>Dejanos tu contacto y te vamos a escribir para contarte cómo ser parte del Club de Argonautas.</p>
          <label className='contacto__form-label'>Nombre<span className='contacto__form-span'>*</span></label>
          {
            (error.id === 1) ? <>
            <input type="text" className='contacto__form-input' name="name" value={formData.name} onChange={handleInputChange}/><p className="contacto__form-error">{error.msg}</p></>: 
            <input type="text" className='contacto__form-input' name="name" value={formData.name} onChange={handleInputChange}/>
          }
          
          <label className='contacto__form-label'>Apellido<span className='contacto__form-span'>*</span></label>
          {
            (error.id === 2) ? <>
            <input type="text" className='contacto__form-input' name="lastname" value={formData.lastname} onChange={handleInputChange}/> <p className="contacto__form-error">{error.msg}</p></> : 
            <input type="text" className='contacto__form-input' name="lastname" value={formData.lastname} onChange={handleInputChange}/>
          }
          <label className='contacto__form-label'>Email<span>*</span></label>
          <input type="email" className='contacto__form-input' name="email" value={formData.email} onChange={handleInputChange}/>
          {
            success ?
            <p className="contacto__form-error">{error.msg}</p> :
            <p className="contacto__form-error">{error.msg}</p>
          }
          <input type="submit" value="Quiero ingresar al Club de Argonautas" className='contacto__form-btn'/>
        </form>
      </section>
    </>
  )
}

export default Sumate