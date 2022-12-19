import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
    Button,
    
  } from "@chakra-ui/react";
import axios from "axios";
  import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import AdminNavbar from "../components/admin/AdminNavbar";
import UserCard from "../components/admin/UserCard";

  
  export default function AdminLogin() {
    const [data, setData] = useState([]);

  
    useEffect(() => {
      axios
        .get("https://hubpointserver.onrender.com/admin/dashboard",{
            withCredentials: true,
            headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
        }})
        .then((res) => setData(res.data));
    }, []);
  

    return (
      <Box>
         <AdminNavbar/>

<Box w={"100%"} style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",margin:"auto",gap:"20px",alignItems:"center",justifyContent:"center"}} >
        {
          data?.map((ele)=>(
            <UserCard key={ele.id} purchased_product={ele.purchased_product} name={ele.name} email={ele.email} company_name={ele.company_name} company_website={ele.company_website}/>
          ))
        }
          
       
      </Box>
      </Box>
    );
  }
  