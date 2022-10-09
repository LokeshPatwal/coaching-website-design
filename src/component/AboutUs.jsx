import React from 'react'
import images from '../images/aboutus.jpg';
import './Styles.css'
import Common from './Common'
const AboutUs = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={images}
        visit="/contactus"
        btname="Contact Now" />
    </>
  )
}

export default AboutUs