import React from 'react'
import { BiCheck} from 'react-icons/bi'
import "./detailsprice.css"

const Detailsprice = ({name}) => {
  return (
    <div name="Price" className='detailsprice'>
        <h1 style={{fontSize:"150%",color:"rgb(96,96,96)",marginLeft:"65px",lineHeight:"60px"}}>{`${name} Pricing`}</h1>
        <p style={{fontSize:"14px",marginLeft:"65px",lineHeight:"50px"}}>{`This integration requires one of the following ${name} software subscription plans.`}</p>
        <div className='price-main'>
          
            <div className='details-price1'>
                <div className='details-price1a' >
                <h1 style={{fontSize:"150%",lineHeight:"40px"}}>Free</h1>
                <p>{`Base cost for ${name} domain address is Free. Custom domains start at $6 per active user/month`}</p>
                </div>
                 <div className='details-price1b'>
                <h1 style={{fontSize:"220%",color:"black",lineHeight:"60px",fontWeight:"660",textAlign:"center"}}>Free</h1>
                    <div style={{display:"flex",width:"80%",lineHeight:"40px",margin:"auto"}}>
                      <span style={{position:"absolute",marginTop:"6px"}}><BiCheck size={25} /></span>
                      <span style={{marginLeft:"25px"}}>{`Send and receive ${name}`}</span>
                    </div>
                    <div style={{display:"flex",width:"80%",lineHeight:"40px",margin:"auto"}}>
                      <span style={{position:"absolute"}}><BiCheck size={25} /></span>
                      <span style={{marginLeft:"25px",lineHeight:"22px"}}>{`Access ${name}, Google Drive, and other features`}</span>
                    </div>
                </div>
            </div>

            <div className='details-price1'>
               
                <div className='details-price1a'>
                <h1 style={{fontSize:"150%",lineHeight:"40px"}}>Basic</h1>
                <p>{`Base cost for ${name} domain address is Free. Custom domains start at $6 per active user/month`}</p>
                </div>
                
                 <div className='details-price1b'>
                 <h1 style={{fontSize:"220%",color:"black",lineHeight:"60px",fontWeight:"660",textAlign:"center"}}>$6</h1>
                    <div style={{display:"flex",width:"80%",lineHeight:"40px",margin:"auto"}}>
                      <span style={{position:"absolute",marginTop:"6px"}}><BiCheck size={25} /></span>
                      <span style={{marginLeft:"25px"}}>{`Send and receive ${name}`}</span>
                    </div>
                    <div style={{display:"flex",width:"80%",lineHeight:"40px",margin:"auto"}}>
                      <span style={{position:"absolute"}}><BiCheck size={25} /></span>
                      <span style={{marginLeft:"25px",lineHeight:"22px"}}>{`Access ${name}, Google Drive, and other features`}</span>
                    </div>
                    <div style={{display:"flex",width:"80%",lineHeight:"40px",margin:"auto",marginTop:"6px"}}>
                      <span style={{position:"absolute"}}><BiCheck size={25} /></span>
                      <span style={{marginLeft:"25px",lineHeight:"22px"}}>{`30GB of cloud-based file storage per user`}</span>
                    </div>
                </div>
            </div>

            <div className='details-price1'>
                
                <div className='details-price1a' >
                <h1 style={{fontSize:"150%",lineHeight:"40px"}}>Business</h1>
                <p>{`Base cost for ${name} domain address is Free. Custom domains start at $6 per active user/month`}</p>
                </div>
               
                 <div className='details-price1b'>
                 <h1 style={{fontSize:"220%",color:"black",lineHeight:"60px",fontWeight:"660",textAlign:"center"}}>$12</h1>
                    <div style={{display:"flex",width:"80%",lineHeight:"40px",margin:"auto"}}>
                      <span style={{position:"absolute",marginTop:"6px"}}><BiCheck size={25} /></span>
                      <span style={{marginLeft:"25px"}}>{`Send and receive ${name}`}</span>
                    </div>
                    <div style={{display:"flex",width:"80%",lineHeight:"40px",margin:"auto"}}>
                      <span style={{position:"absolute"}}><BiCheck size={25} /></span>
                      <span style={{marginLeft:"25px",lineHeight:"22px"}}>{`Access ${name}, Google Drive, and other features`}</span>
                    </div>
                    <div style={{display:"flex",width:"80%",lineHeight:"40px",margin:"auto",marginTop:"6px"}}>
                      <span style={{position:"absolute"}}><BiCheck size={25} /></span>
                      <span style={{marginLeft:"25px",lineHeight:"22px"}}>{`Unlimited Cloud Storage`}</span>
                    </div>
                </div>
            </div>
           
        </div>
        <p className='p-price'>{`* The pricing here is for display purposes only. All prices are U.S. only and do not include taxes, incentives, discounts, or other pricing variables. You should contact the partner for the most up to date and correct pricing information. HubSpot does not take any responsibility for this pricing information, which is provided by our partners. Pricing last updated: 01/24/2022`}</p>
    </div>
  )
}

export default Detailsprice
