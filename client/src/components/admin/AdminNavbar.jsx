import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <>
     <Box w={"100%"} position="fixed" zIndex={99} top="0" h={"60px"} color="white" bg={"#ff5c35"} display="flex" alignItems="center" justifyContent="space-around">
    <Link to="/admin">Dashboard</Link>
    <Link to="/admin/services">All services</Link>
    <Link to="/admin/create_service">Add Services</Link>
</Box>
    </>
  )
}

export default AdminNavbar