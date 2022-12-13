import React from 'react'
import "./detailsmiddle.css"
import context1 from "../../images/context1.webp";
import Slide3 from "../../images/Slide3-1.webp";
import Slide4 from "../../images/Slide2-5.webp";
import {Link, Navigate} from "react-router-dom"
import { AiOutlineLink } from 'react-icons/ai';
import {FaInnosoft,FaFacebookSquare} from "react-icons/fa"
import {BsFillTelephonePlusFill} from "react-icons/bs"
const Detailsmiddle = () => {
  return (
    <div className='detailsmiddle'> 
        <div className='details-left'>
            
            <div name="Overview" style={{width:"100%",height:"auto",marginBottom:"70px"}}>
                    <div style={{width:"80%",height:"400px",margin:"auto",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}>
                        <img src={context1} width="100%"/>
                    </div>
                    <div style={{width:"95%",margin:"auto",lineHeight:"50px",marginTop:"-10px"}}>
                          <h1 style={{fontSize:"150%",color:"rgb(96,96,96)"}}>{`${`Gmail`} Integration Overview`}</h1>
                          <div >
                            <h1 style={{fontWeight:"650"}}>{`Connect your ${"Gmail"} to HubSpot`}</h1>
                            <p style={{lineHeight:"22px",fontSize:"14px"}}>The Google Calendar two-way integration with HubSpot allows you to simultaneously log a meeting in your CRM, 
                                create a calendar event for that meeting, and send invites to meeting guests. Additionally, 
                                if you create a meeting event in Google Calendar with a HubSpot contact, 
                                the event will appear on their contact record timeline.
                            </p>
                          </div>
                          <div>
                          <div>
                            <h1 style={{fontWeight:"650"}}>{`Use your ${"Gmail"} with HubSpot meetings`}</h1>
                            <p style={{lineHeight:"22px",fontSize:"14px"}}>With the meetings tool, you can connect your calendar with HubSpot, 
                                then your prospects can book a time that works for both of you, without the back-and-forth of email.
                            </p>
                          </div>
                          </div>
                    </div>
            </div>
            
            <div name="Features" className='features'>
                  <h1 style={{fontSize:"150%",color:"rgb(96,96,96)",marginLeft:"19px",lineHeight:"50px"}}>Integration features</h1>
                  <div className='features1'>
                        <div className='features1a'>
                        <h1 style={{fontWeight:"650"}}>{`Connect your ${"Gmail"} to HubSpot`}</h1>
                            <p style={{lineHeight:"22px",fontSize:"14px"}}>
                              The Google Calendar two-way integration with HubSpot allows you to simultaneously log a meeting in your CRM, 
                              create a calendar event for that meeting, and send invites to meeting guests.
                            </p>
                        </div>
                        <div className='features1b'>
                            <img src={Slide3} width="100%"/>
                        </div>
                  </div>
                  <div className='features1'>
                        <div className='features1a'>
                           <h1 style={{fontWeight:"650"}}>{`Use your ${"Gmail"} with HubSpot meetings`}</h1>
                             <p style={{lineHeight:"22px",fontSize:"14px"}}>
                              With the meetings tool, you can connect your calendar with HubSpot, then your prospects can book a time that works for both of you, 
                              without the back-and-forth of email.
                             </p>
                        </div>
                        <div className='features1b'>
                            <img src={Slide4} width="100%"/>
                        </div>
                  </div>
            </div>
            
            <div name="Shared data" style={{width:"100%",height:"auto",marginBottom:"70px",height:"auto"}}>
                  <div style={{width:"95%",margin:"auto",marginBottom:"30px"}}>
                   <h1 style={{fontSize:"150%",color:"rgb(96,96,96)",lineHeight:"50px"}}>Shared data</h1>
                    <div style={{width:"100%",margin:"auto",display:"flex",justifyContent:"space-around",alignItems:"center",background:"rgb(245,245,245)",fontSize:"14px",padding:"12px 0px",border:"1px solid rgb(220,220,220)"}}>
                        <span>GOOGLE CALENDAR DATA</span>
                        <span>DATA FLOW</span>
                        <span>HUBSPOT DATA</span>
                    </div>
                    <div style={{width:"100%",margin:"auto",display:"flex",justifyContent:"space-around",alignItems:"center",fontSize:"14px",padding:"20px 0px",border:"1px solid rgb(220,220,220)",borderTop:"1px solid white"}}>
                    <span>Calendar Meetings</span>
                        <span>Arrow</span>
                        <span>Contacts</span>
                    </div>
                  </div>
                  <div style={{width:"95%",margin:"auto",fontSize:"14px"}}>
                    <h1 style={{fontSize:"150%",lineHeight:"50px"}}>{`${"Gmail"} integrates with these HubSpot features`}</h1>
                    <h1>CRM</h1>
                    <button style={{border:"1px solid rgb(220,220,220)",background:"rgb(245,245,245)",padding:"4px 8px",marginTop:"5px",fontSize:"100%"}} onClick={()=>{<Navigate to="/nextpage"/>}}>Meetings</button>
                  </div>
            </div>

        </div>

        <div className='details-right' style={{}}>
            <h1 style={{fontSize:"150%",marginBottom:"15px"}}>Details</h1>

             <div className='details-right1'>
                <div className='details-rigth1a'>
                    <p style={{lineHeight:"22px",fontSize:"15px"}}>Provider</p>
                   <div className='details-rigth1aa'> <span style={{paddingRight:"4px",fontWeight:"bold",color:"rgb(70,130,180)"}}>HubSpot</span> <span><Link to ="/home"><AiOutlineLink size={20}/></Link></span></div>
                </div>

             </div>
             
             <div className='details-right2'>
                <p>Total installs</p>
                <p>10,000+</p>
             </div>
            
             <div className='details-right3'>
                <p>Category</p>
                <span className='p-button'><Link to="/home">Scheduling</Link></span>
             </div>

             <div className='details-right4'>
                <p>Features</p>
                <span className='p-button'><Link to="/home">Appointment Scheduling</Link></span>
                <span className='p-button' style={{marginLeft:"10px"}}><Link to="/home">Calender Management</Link></span><br/>
                <span className='p-button'><Link to="/home">Group Scheduling</Link></span>
                <span className='p-button' style={{marginLeft:"10px"}}><Link to="/home">Online booking</Link></span>
                <span className='p-button'  style={{marginLeft:"10px"}}><Link to="/home">Real-time Scheduling</Link></span>
             </div>

             <div className='details-right5'>
                <p>Languages this HubSpot app is available in</p>
                <p>Japanese, German, Finnish, Swedish, Portuguese, English, Italian, French, Spanish, Polish, and Dutch</p>
             </div>
              
              <div className='details-right6a'>
               <h1 style={{fontSize:"150%",marginBottom:"15px"}}>Requirements</h1>

               <div className='details-right6'>
                  <p style={{fontSize:"14px"}}>HubSpot Subscription</p>
                 <div className='details-rigth1aa'> <span style={{paddingRight:"4px",fontWeight:"bold",color:"rgb(70,130,180)"}}>Compatible with your HubSpot</span> <span><Link to ="/home"><AiOutlineLink size={20}/></Link></span></div>
                 <p  style={{fontSize:"14px",color:"rgb(70,130,180)"}}><Link to="/home">See all compatible plans</Link></p>
               </div>

               <div className='details-right6'>
                <p style={{fontSize:"14px"}}>HubSpot Account Permissions</p>
                <p>No permissions required</p>
               </div>
                
               <div className='details-right6'>
                <p style={{fontSize:"14px"}}>Google Calendar Subscription</p>
                <p name="Pricing" style={{color:"rgb(70,130,180)"}}>Free plan</p>
               </div>

              </div>

              <div className='details-right6a'>
              <h1 style={{fontSize:"150%",marginBottom:"15px"}}>{`HubSpot's ${"Gmail"} App Support`}</h1>
              <div className='details-rigth1aa'> <span style={{marginRight:"5px"}}><Link to ="/home"><FaInnosoft size={18}/></Link></span><span style={{paddingRight:"4px",fontWeight:"bold",color:"rgb(70,130,180)"}}>Company website</span></div>
              <div className='details-rigth1aa'> <span style={{marginRight:"5px"}}><Link to ="https://www.facebook.com/hubspot"><FaFacebookSquare size={18}/></Link></span><span style={{paddingRight:"4px",fontWeight:"bold",color:"rgb(70,130,180)"}}>Facebook</span></div>
              <div className='details-rigth1aa'> <span style={{marginRight:"5px"}}><Link to ="tel:+18884827768"><BsFillTelephonePlusFill size={18}/></Link></span><span style={{paddingRight:"4px",fontWeight:"bold",color:"rgb(70,130,180)"}}>+1 (888) 482-7768, ext.3</span></div>
              <p style={{fontSize:"14px",marginTop:"4px"}}>Customer support languages</p>
              <p>English, French, German, Japanese, Portuguese, and Spanish</p>
              </div>

              <div className='details-right6a'>
              <h1 style={{fontSize:"150%",marginBottom:"15px"}}>Data Privacy</h1>
              <p style={{marginBottom:"15px"}}>You understand that when using this integration, it's up to you to comply with applicable laws and regulations, as well as the HubSpot AUP and Terms of Service. Please review this app partner's documentation for more information.</p>
               
               <div  className='details-right6'>
                 <p style={{fontSize:"14px",marginTop:"4px"}}>Privacy policy</p>
                 <p>Please see HubSpot's Privacy Policy for more information.</p>
               </div>

               <div  className='details-right6'>
                 <p style={{fontSize:"14px",marginTop:"4px"}}>Data hosting location</p>
                 <p>For information on where third-party apps store and process data or their compliance with local regulations, please see the provider's documentation and privacy policy.</p>
               </div>

              </div>
        </div>
    </div>
  )
}

export default Detailsmiddle
