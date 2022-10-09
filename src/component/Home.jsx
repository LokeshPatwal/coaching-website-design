import React from 'react'
import images from '../images/coachingimg.avif';
import './Styles.css'
import Common from './Common';

const Home = () => {
  return (
    <Common
      name="Be successful with"
      imgsrc={images}
      visit="/services"
      btname="Get Started" />
  )
}

export default Home