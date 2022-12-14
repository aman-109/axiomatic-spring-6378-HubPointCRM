import React from 'react'
import BelowImageText from '../components/BelowImageText';
import HeaderCards from '../components/HeaderCards';
import HomeimageComponent from '../components/HomeimageComponent';
import StatsHome from '../components/StatsHome';

const Home = () => {
  return (
    <div>
      <HomeimageComponent/>
      <BelowImageText/>
      <HeaderCards/>
      <StatsHome/>
    </div>
  )
}

export default Home