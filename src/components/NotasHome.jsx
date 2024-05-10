import React from 'react'
import { Link } from 'react-router-dom'

const NotasHome = ({item}) => {
  return (
    <Link to={`/notas/nota/${item._id}`} className='a__cardhome'>
        <div className='cardhome' data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
            <img src={`https://intuitive-adventure-production.up.railway.app/${item.image}`} className='cardhome__img' alt={item.title}/>
            <div className='cardhome__container'>
                <h4 className='cardhome__container-titulo'>{item.title}</h4>
                <p className='cardhome__container-p'>{item.body[0].parrafo}</p>
                <div className='cardhome__container-link'>
                    Ir a la nota completa
                </div>
            </div>
        </div>
    </Link>
  )
}

export default NotasHome