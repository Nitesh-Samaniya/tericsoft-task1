import React from 'react'
import Box from '@mui/material/Box';

const Navbar = () => {
  return (
    <Box sx={{
        width: "100%",
        backgroundColor: "skyblue",
        padding: "15px",
        display: "flex",
        justifyContent: 'space-evenly',
        fontFamily: "cursive",
        fontSize: "24px"
    }}>
        <Box sx={{cursor: "pointer"}}>Tericsoft</Box>
        <Box sx={{cursor: "pointer"}}>Employee's Sheet</Box>
    </Box>
  )
}

export default Navbar