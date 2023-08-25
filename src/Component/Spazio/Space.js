import { useState } from "react";

import { Button, Box, TextField,Typography, Stack, Container } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import Header from "../Common/Header";
import Image from "./image/mare.jpg"


const Word = () => {
  const [string, setString] = useState("");
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [validation, setValidation] = useState(false);

 

  const submitHandler = (e) => {
    e.preventDefault();
    word(string);
    setShow(true);
    
    if (string !== "") {
      setValidation(true);
    } else {
      alert("Inserire la stringa!");
    }
  };

  const word = () => {
    console.log(string, name);    
    let s = string.replaceAll(" ", " - ");
    console.log(s); 
    setName(s);
  };

  const resetHandler = () => {
    setShow(false);
    setString("");
    setValidation(false);
    
  };

  

  return (
    
     
    
        
    <Container>
       <Header title='Gioco della sostituzione, sostituisci gli spazi con i trattini!' img ={Image}/>
       <br /><br />
        <Container sx = {{bgcolor: '#eeeeee'}}>
      

      <Box onSubmit={submitHandler}
      component="form" 
           
    >
      <Stack spacing={3} direction="row">
      <Typography variant="h6">
      Digita la parola:  
      </Typography>
      
      <TextField value={string}
            onChange={(e) => setString(e.target.value)}>
      </TextField>
      
        <Button type="submit"  variant="contained">Conferma</Button>
      </Stack>
      
    </Box> 
    <br />
      
      {show && validation ? (
        <div>
          {" "}
          <Typography variant="h5">La parola restituita è:   {name}</Typography>{" "}
  
          <br />
          <Button onClick={resetHandler} startIcon={<DeleteIcon />} variant="contained"> Cancella </Button>{" "}

        </div>
      ) : null}

    </Container>
    </Container>
    
    
      
  );
};

export default Word;
