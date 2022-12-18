import React from 'react'
import "./detailsnavbar.css"
import gmail from "../../images/gmail.webp";
import certified from "../../images/certified.webp";
import {AiOutlineLink} from "react-icons/ai"
import {Link} from "react-scroll"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useToast } from '@chakra-ui/react';
const Detailsnavbar = ({image,name}) => {
   const {id}=useParams()
   const toast=useToast()
   const navigate=useNavigate()
   const addProduct=async()=>{
      try{

         await axios(`https://hubpointserver.onrender.com/products/add-product/${id}`,{
            withCredentials: true,
            headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
        }})
        
        toaster()
        setTimeout(()=>{
         navigate("/")
        },3000)
         
      }catch(e){
         console.log(e)
      }
   }

   const toaster=()=>{
      return toast({
        title: 'Service Added Successfully.',
        description: "Redirecting to HomePage.",
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
     }
  
  return (
    <div className='detailsnavbar'>
       <div className='navbar-left'>
          <div className='navbar-left1'>
          
          <div style={{width:"15%"}}>
            <img src={image} style={{width:"100%"}}/>
          </div>

          <div style={{width:"80%",lineHeight:"32px"}}>
            <h1 style={{fontSize:"30px",fontWeight:"bold",lineHeight:"50px"}}>{`${name}`}</h1>
            <p style={{lineHeight:"22px"}}>{`Bring HubSpot to your inbox with the HubSpot integration for ${name}.`}</p>
             
             <div style={{width:"100%",display:"flex",margin:"auto"}}>
                <div style={{width:"5%",marginTop:"3px"}}> 
                   <img src={certified} style={{width:"100%",borderRadius:"50%"}}/>
                </div>
                <div style={{marginLeft:"5px"}}> 
                   <span>HUBSPOT CERTIFIED APP</span>
                </div>
             </div>
          </div>

          </div>
          <div className='navbar-left3' >
              <div className='navbar-left2'><Link to="Overview" smooth duration={500}>Overview</Link></div>
              <div className='navbar-left2'><Link to="Features" smooth duration={500}>Features</Link></div>
              <div className='navbar-left2'><Link to="Shared data" smooth duration={500}>Shared data</Link></div>
              <div className='navbar-left2'><Link to="Price" smooth duration={500}>Pricing</Link></div>
              <div className='navbar-left2'><Link to="Review" smooth duration={500}>Reviews</Link></div>
          </div>
       </div>
       
       <div className='navbar-rigth' >
          <div className='navbar-rigth1'><div style={{paddingRight:"4px",fontWeight:"bold",color:"rgb(70,130,180)"}}>View setup guide</div> <AiOutlineLink size={20}/></div>
          <div className='navbar-rigth2'><button style={{width:"100%",backgroundColor:"rgb(255,99,71)",color:"white",padding:"8px",borderRadius:"7px"}} onClick={addProduct}>Install app</button></div>
       </div>

       <div className='navbar-left4' >
              <div className='navbar-left2'><Link to="Overview" smooth duration={500}>Overview</Link></div>
              <div className='navbar-left2'><Link to="Features" smooth duration={500}>Features</Link></div>
              <div className='navbar-left2'><Link to="Shared data" smooth duration={500}>Shared data</Link></div>
              <div className='navbar-left2'><Link to="Price" smooth duration={500}>Pricing</Link></div>
              <div className='navbar-left2'><Link to="Review" smooth duration={500}>Reviews</Link></div>
          </div>
    </div>
  )
}

export default Detailsnavbar
