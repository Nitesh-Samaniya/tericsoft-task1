import React from 'react'
import Box from '@mui/material/Box';

// Define a functional component named Navbar
const Navbar = () => {
  // Render a Box component from Material-UI library with some styles
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

// Export the Navbar component so it can be used in other parts of the app
export default Navbar