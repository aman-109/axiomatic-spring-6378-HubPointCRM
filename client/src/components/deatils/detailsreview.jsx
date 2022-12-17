import "./detailsreview.css";
import { Progress, Select ,Stack} from '@chakra-ui/react'
import {HiStar} from "react-icons/hi"
import { useState } from "react";

let comments = [
    {
        rating:[1,2,3,4,5],
        rating1:[],
        date:"Dec 10, 2020",
        industry:"Amazon",
        title:"Awesome tool - would love to slot availabilities a different way",
        desc:"I would love to be able slot an availability with the same interface as clicking and dragging to extend a meeting on google calendar. I.E. component is a day visualized the same as google cal, and you can click, or click, hold, and drag on the day to slot an availability window to meet!",
        ans:"In this use case, setting up HubSpot coffee chats!",
        date1:2020
    },
    {
        rating:[1,2,3,4],
        rating1:[1],
        date:"Feb 16, 2020",
        industry:"Instagram",
        title:"Solving the problem of scheduling meetings",
        desc:"It's easy to use. It's integrated with many other platforms. I enjoy using Google Calendar.",
        ans:"Scheduling meetings is a lot easier",
        date1:2020
    },
    {
        rating:[1,2,3],
        rating1:[1,2],
        date:"Oct 19, 2022",
        industry:"No-broker",
        title:"Works exactly as it should",
        desc:"It's great. All I have to do is share a link for someone to schedule a meeting with me. They only see the times that I'm available and it automatically creates an event in Google Calendar.",
        ans:"Quickly and easily schedule meetings internally and externally.",
        date1:2022
    },
    {
        rating:[1,2],
        rating1:[1,2,3],
        date:"Nov 15, 2022",
        industry:"Flipkart",
        title:"Could make a couple things easier, but overall helpful!",
        desc:"Better than not having a calendar link, but it'd be great if it was more obvious (maybe an independent screen) what time length option someone was selecting (30 vs 60 min). Good stuff overall!",
        ans:"Work",
        date1:2022
    },
    {
        rating:[1],
        rating1:[1,2,3,4],
        date:"Sept 23, 2022",
        industry:"Facbook",
        title:"poor HubSpot!",
        desc:"I would not use it if I had to pay from my own money. Im not a Microsoft fan but Outlook beats Google in many dimensions: find free slots, connection to email, integration with other tools, etc.",
        ans:"Fine!!!",
        date1:2022
    }
]

const Detailsreview = ({name,rating}) => {
    const[data,setData]=useState(comments);

    const Searching=(e)=>{
       if(e.target.value){
        let updateData = data.filter((ele)=>ele.title.includes(e.target.value));
         setTimeout(()=>{
         setData(updateData)
       },2000)
       }
       else{
        let updateData = comments;
        setTimeout(()=>{
         setData(updateData)
       },2000)
       }
    }

    const filtering=(e)=>{

     if(e.target.value){
      let updateData = comments.filter((ele)=>ele.rating.length==e.target.value);
      setTimeout(()=>{
         setData(updateData)
       },1000)
     }
     else{
      setTimeout(()=>{
         setData(comments)
       },1000)
     }
    }

    const filterTitle=(e)=>{
      if(e.target.value){
         let updateData = comments.filter((ele)=>ele.industry==e.target.value);
         setTimeout(()=>{
            setData(updateData)
          },1000)
        }
        else{
         setTimeout(()=>{
            setData(comments)
          },1000)
        }
    }
    
    const randomFilter=(e)=>{
      let updateData;
      if(e.target.value=="5"){
         updateData = comments.filter((ele)=>ele.date1>=2022);
      }
      if(e.target.value=="4"){
         updateData = comments.filter((ele)=>ele.date1<=2020);
      }
      if(e.target.value=="3"){
         updateData = comments.filter((ele)=>ele.rating.length==5);
      }
      if(e.target.value=="2"){
         updateData = comments.filter((ele)=>ele.rating.length==1);
      }
      else{
         updateData = comments;
      }
      setTimeout(()=>{
         setData(updateData)
       },1000)
    }

  return (
    <div name="Review" className='price-main1'>
         <h1 style={{fontSize:"150%",color:"rgb(96,96,96)",marginLeft:"30px",lineHeight:"60px"}}>{`${name} Customer Reviews`}</h1>
       <div className='price-main2'>
           <div className='price-left'>
               <div style={{width:"90%",margin:"auto",borderBottom:"1px solid gray",paddingBottom:"15px",marginBottom:"20px"}}>
                    <h1 style={{fontSize:"50px",fontWeight:"750"}}>{rating}</h1>
                    <div style={{display:"flex",justifyItems:"center",marginBottom:"8px"}}>{comments[0].rating.map((ele,ind)=>ind+1<=Math.round(rating)?<HiStar style={{color:"FF9529"}} size={30}/>:<HiStar style={{color:"#A9A9A9"}} size={30}/>)}</div>
                    <div style={{fontSize:"15px",marginBottom:"5px"}}>{`Based on ${comments.length} ratings`}</div>
                    <div style={{fontSize:"15px",marginBottom:"5px",color:"rgb(30,144,255",fontWeight:"600"}}>{`See all customer reviews`}</div>
               </div>
               <div style={{width:"90%",margin:"auto",borderBottom:"1px solid gray",paddingBottom:"15px",marginBottom:"20px"}}>
                    <p style={{fontWeight:"500",marginBottom:"5px"}}>Overall rating</p>

                    <div style={{display:"flex",alignItems:"center"}}>
                     <span style={{color:"rgb(30,144,255",fontWeight:"500"}}>5</span>
                     <HiStar style={{color:"FF9529"}} size={22}/>
                     <Progress width={"45%"} hasStripe value={50} />
                     <span style={{color:"rgb(30,144,255",fontWeight:"500",marginLeft:"5px"}}>50%</span>
                     </div>
                     
                     <div style={{display:"flex",alignItems:"center"}}>
                     <span style={{color:"rgb(30,144,255",fontWeight:"500"}}>4</span>
                     <HiStar style={{color:"FF9529"}} size={22}/>
                     <Progress width={"45%"} hasStripe value={40} />
                     <span style={{color:"rgb(30,144,255",fontWeight:"500",marginLeft:"5px"}}>40%</span>
                     </div>

                     <div style={{display:"flex",alignItems:"center"}}>
                     <span style={{color:"rgb(30,144,255",fontWeight:"500"}}>3</span>
                     <HiStar style={{color:"FF9529"}} size={22}/>
                     <Progress width={"45%"} hasStripe value={33} />
                     <span style={{color:"rgb(30,144,255",fontWeight:"500",marginLeft:"5px"}}>33%</span>
                     </div>

                     <div style={{display:"flex",alignItems:"center"}}>
                     <span style={{color:"rgb(30,144,255",fontWeight:"500"}}>2</span>
                     <HiStar style={{color:"FF9529"}} size={22}/>
                     <Progress width={"45%"} hasStripe value={20} />
                     <span style={{color:"rgb(30,144,255",fontWeight:"500",marginLeft:"5px"}}>25%</span>
                     </div>

                     <div style={{display:"flex",alignItems:"center"}}>
                     <span style={{color:"rgb(30,144,255",fontWeight:"500"}}>1</span>
                     <HiStar style={{color:"FF9529"}} size={22}/>
                     <Progress width={"45%"} hasStripe value={15} />
                     <span style={{color:"rgb(30,144,255",fontWeight:"500",marginLeft:"5px"}}>15%</span>
                     </div>
               </div>
           </div>

           <div className="price-right">

                 <div className="price-right1">
                    <div style={{width:"40%",fontSize:"22px",fontWeight:"600"}}>{`${data.length} Reviews`}</div>
                    <div style={{width:"40%"}}>
                        <input style={{border:"2px solid rgb(30,144,255)",padding:"5px 5px",borderRadius:"5px",width:"95%"}} type="text" placeholder="Search" onChange={Searching}/>
                    </div>
                 </div>

                 <div className="price-right1">

                      <div style={{width:"65%",justifyContent:"space-around",display:"flex"}}>
                        <div style={{width:"24%"}}>Filters :</div> 
                        <Stack spacing={2} width="24%">
                           <Select width="90%"  variant='filled' placeholder='All Stars' size='sm' onChange={filtering}>
                              <option value='5'>5 stars only</option>
                              <option value='4'>4 stars only</option>
                              <option value='3'>3 stars only</option>
                              <option value='2'>2 stars only</option>
                              <option value='1'>1 stars only</option>
                           </Select>
                        </Stack>

                        <Stack spacing={2} width="24%">
                           <Select width="90%" variant='filled' placeholder='Company sizes' size='sm'>
                              <option value='5'>Above 5 stars employees</option>
                              <option value='4'>3 to 4 employees</option>
                              <option value='3'>2 to 3 employess</option>
                              <option value='2'>1 to 2 employees</option>
                              <option value='1'>1 employee</option>
                           </Select>
                        </Stack>

                        <Stack spacing={2} width="24%">
                           <Select width="90%" variant='filled' placeholder='All Industries' size='sm' onChange={filterTitle}>
                              <option value='Instagram'>Instagram Industries</option>
                              <option value='No-broker'>No-broker Industries</option>
                              <option value='Flipkart'>Flipkart Industries</option>
                              <option value='Amazon'>Amazon Industries</option>
                              <option value='Facbook'>Facebook Industries</option>
                           </Select>
                        </Stack>
                      </div>

                      <div style={{width:"30%"}}>
                        <Stack spacing={2} width="65%" margin="auto">
                           <Select width="80%" variant='filled' placeholder='Sort' size='sm' onChange={randomFilter}>
                              <option value='5'>Newest</option>
                              <option value='4'>Oldest</option>
                              <option value='3'>Highest rated</option>
                              <option value='2'>Lowest rated</option>
                              <option value='1'>Most helpful</option>
                           </Select>
                        </Stack>

                      </div>
                 </div>

                 <div className="price-right2">
                       {data.length>0 && data.map(({rating,date,industry,title,ans,rating1,desc})=>
                       <div style={{width:"100%",lineHeight:"45px",borderBottom:"1px solid gray",marginBottom:"30px",paddingBottom:"15px"}}>

                             <div style={{display:"flex",justifyItems:"center"}}>
                             {rating.map((ele)=><HiStar style={{color:"FF9529"}} size={30}/>)}
                             {rating1.map((ele)=><HiStar style={{color:"#A9A9A9"}} size={30}/>)}
                            <div style={{marginLeft:"5px",marginTop:"-10px"}}>{date}</div>
                           </div>

                           <div style={{fontWeight:"700",fontSize:"30px"}}>
                            {industry}
                           </div>

                           <div style={{fontWeight:"600",fontSize:"20px"}}>
                                    {title}
                            </div>
                           
                            <div style={{lineHeight:"22px",fontSize:"15px"}}>
                                    {desc}
                            </div>
                            
                            <div style={{fontSize:"15px",fontWeight:"500"}}>What problem are you trying to solve?</div>
                            
                            <div style={{lineHeight:"22px",fontSize:"15px"}}>
                                    {ans}
                            </div>
                       </div>
                       )}
                 </div>
           </div>
       </div>
    </div>
  )
}

export default Detailsreview
