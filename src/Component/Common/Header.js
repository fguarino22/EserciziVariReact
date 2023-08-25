import {Typography, Container, Box } from "@mui/material";


function Header({title, img}) {
  
    return (
      <Container className="Header" style={{backgroundColor: '#f4511e', textAlign: 'center'}}>
        <Box
  component="img"
  sx={{
    height: 233,
    width: 350,
    maxHeight: { xs: 233, md: 167 },
    maxWidth: { xs: 350, md: 250 },
  }}
  alt="Parola"
  src= {img}
/>
        <Typography variant="h4">{title}</Typography>
      </Container>
    );
  }
  
  export default Header;