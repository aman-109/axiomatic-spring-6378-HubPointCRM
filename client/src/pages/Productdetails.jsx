import React from 'react'
import Detailsmiddle from '../components/deatils/detailsmiddle'
import Detailsnavbar from '../components/deatils/detailsnavbar'
import Detailsprice from '../components/deatils/detailsprice'
import Detailsreview from '../components/deatils/detailsreview'
const Productdetails = () => {
  return (
    <div>
        <Detailsnavbar/>
        <Detailsmiddle/>
        <Detailsprice/>
        <Detailsreview/>
    </div>
  )
}

export default Productdetails
