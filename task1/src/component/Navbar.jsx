import React from 'react'
import Box from '@mui/material/Box';

const Navbar = () => {
  return (
    <Box sx={{
        width: "100%",
        backgroundColor: "skyblue",
        padding: "15px",
        fontFamily: "cursive",
        fontSize: "24px",
        cursor: "pointer",
        color:'red',
        marginBottom: "50px"
    }}>
        Tericsoft Employee's Sheet
    </Box>
  )
}

export default Navbar