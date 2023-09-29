import React from 'react'
import Navbar from '../components/Navbar'

import Footer from "../components/Footer" 

import BackgroundSection from "../components/BackgroundSection"
import ImagesSection from "../components/ImagesSection"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <BackgroundSection/>
      <ImagesSection/>
      <Footer/>
    </div>
  )
}

export default Home
