import React from 'react'
import AdsComponent from '../components/AdsComponent';
import BelowImageText from '../components/BelowImageText';
import GrowthHome from '../components/GrowthHome';
import HeaderCards from '../components/HeaderCards';
import HomeimageComponent from '../components/HomeimageComponent';
import StatsHome from '../components/StatsHome';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <HomeimageComponent/>
      <BelowImageText/>
      <HeaderCards/>
      <StatsHome/>
      <AdsComponent/>
      <GrowthHome/>
      <Footer/>
    </div>
  )
}

export default Home