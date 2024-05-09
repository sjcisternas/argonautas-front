import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet, useNavigation, useLocation } from 'react-router-dom'

const LayoutPublic = () => {
  
  const navigation = useNavigation();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <>
      <Navbar/>
      {
        navigation.state === 'loading' ?
        <div>Loading...</div> :
        <Outlet/>
      }
      <Footer/>
    </>
  )
}

export default LayoutPublic