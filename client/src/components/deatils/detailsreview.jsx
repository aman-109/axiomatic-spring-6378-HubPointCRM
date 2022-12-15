import "./detailsreview.css";
import { Select ,Stack} from '@chakra-ui/react'
import {HiStar,HiOutlineStar} from "react-icons/hi"

let comments = [
    {
        rating:[1,2,3,4,5],
        rating1:[],
        date:"Dec 10, 2020",
        industry:"Amazon",
        title:"Awesome tool - would love to slot availabilities a different way",
        desc:"I would love to be able slot an availability with the same interface as clicking and dragging to extend a meeting on google calendar. I.E. component is a day visualized the same as google cal, and you can click, or click, hold, and drag on the day to slot an availability window to meet!",
        ans:"In this use case, setting up HubSpot coffee chats!"
    },
    {
        rating:[1,2,3,4],
        rating1:[1],
        date:"Feb 16, 2020",
        industry:"Instagram",
        title:"Solving the problem of scheduling meetings",
        desc:"It's easy to use. It's integrated with many other platforms. I enjoy using Google Calendar.",
        ans:"Scheduling meetings is a lot easier"
    },
    {
        rating:[1,2,3],
        rating1:[1,2],
        date:"Oct 19, 2022",
        industry:"No-broker",
        title:"Works exactly as it should",
        desc:"It's great. All I have to do is share a link for someone to schedule a meeting with me. They only see the times that I'm available and it automatically creates an event in Google Calendar.",
        ans:"Quickly and easily schedule meetings internally and externally."
    },
    {
        rating:[1,2],
        rating1:[1,2,3],
        date:"Nov 15, 2022",
        industry:"Flipkart",
        title:"Could make a couple things easier, but overall helpful!",
        desc:"Better than not having a calendar link, but it'd be great if it was more obvious (maybe an independent screen) what time length option someone was selecting (30 vs 60 min). Good stuff overall!",
        ans:"Work"
    },
    {
        rating:[1],
        rating1:[1,2,3,4],
        date:"Sept 23, 2022",
        industry:"Flipkart",
        title:"poor HubSpot!",
        desc:"I would not use it if I had to pay from my own money. Im not a Microsoft fan but Outlook beats Google in many dimensions: find free slots, connection to email, integration with other tools, etc.",
        ans:"Facbook"
    }
]

const Detailsreview = () => {
  return (
    <div name="Review" className='price-main1'>
         <h1 style={{fontSize:"150%",color:"rgb(96,96,96)",marginLeft:"30px",lineHeight:"60px"}}>{`${`Google Gmail`} Customer Reviews`}</h1>
       <div className='price-main2'>
           <div className='price-left'>
               <div style={{width:"90%",margin:"auto"}}>
                    <h1 style={{fontSize:"50px",fontWeight:"750"}}>{`3.9`}</h1>
               </div>
           </div>
           <div className="price-right">

                 <div className="price-right1">
                    <div style={{width:"40%",fontSize:"22px",fontWeight:"600"}}>660 Reviews</div>
                    <div style={{width:"30%"}}>
                        <input style={{border:"2px solid rgb(30,144,255)",padding:"5px 5px",borderRadius:"5px"}} type="text" placeholder="Search"/>
                    </div>
                 </div>

                 <div className="price-right1">

                      <div style={{width:"65%",justifyContent:"space-around",display:"flex"}}>
                        <div style={{width:"24%"}}>Filters reviews:</div> 
                        <Stack spacing={2} width="24%">
                           <Select width="90%" variant='filled' placeholder='All Stars' size='sm'>
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
                           <Select width="90%" variant='filled' placeholder='All Industries' size='sm'>
                              <option value='Instagram'>Instagram Industries</option>
                              <option value='No-broker'>No-broker Industries</option>
                              <option value='Flipkart'>Flipkart Industries</option>
                              <option value='Amazon'>Amazon Industries</option>
                              <option value='Facbook'>Facebook Industries</option>
                           </Select>
                        </Stack>
                      </div>

                      <div style={{width:"25%",display:"flex",justifyContent:"space-between"}}>
                        <div style={{width:"20%"}}>
                        Sort:
                        </div>
                        <Stack spacing={2} width="75%">
                           <Select width="90%" variant='filled' placeholder='Oldest' size='sm'>
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
                       {comments.length>0 && comments.map(({rating,date,industry,title,ans,rating1,desc})=>
                       <div style={{width:"100%",lineHeight:"45px",borderBottom:"1px solid gray",marginBottom:"30px",paddingBottom:"15px"}}>

                             <div style={{display:"flex",justifyItems:"center"}}>
                             {rating.map((ele)=><HiStar style={{color:"FF9529"}} size={30}/>)}
                             {rating1.map((ele)=><HiStar style={{color:"#A9A9A9"}} size={30}/>)}
                            <div style={{marginLeft:"5px",marginTop:"-10px"}}>{date}</div>
                           </div>

                           <div style={{fontWeight:"700",fontSize:"30px"}}>
                            {`Industry ${industry}`}
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
