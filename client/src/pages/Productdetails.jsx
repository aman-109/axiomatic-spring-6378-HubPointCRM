import React from 'react'
import { useParams } from 'react-router-dom'
import {useState,useEffect } from "react"
import Detailsmiddle from '../components/deatils/detailsmiddle'
import Detailsnavbar from '../components/deatils/detailsnavbar'
import Detailsprice from '../components/deatils/detailsprice'
import Detailsreview from '../components/deatils/detailsreview';
import axios from "axios"
import NavbarTwo from '../components/dashboard/Navbar'
const Productdetails = () => {
  const {id} = useParams();
  const[details,setDetails]=useState(null);

  const fetchDetails = async ()=>{
    try{
      let {data} = await axios.get(`http://localhost:8179/products/${id}`);
      setDetails(data)
    }
    catch(err){
      setDetails(err.message)
    }
  }

  useEffect(()=>{
     fetchDetails();
  },[])
  console.log(details)
  return (
    <div>
      <NavbarTwo/>
        <Detailsnavbar {...details}/>
        <Detailsmiddle {...details}/>
        <Detailsprice {...details}/>
        <Detailsreview {...details}/>
    </div>
  )
}

export default Productdetails
