import { useState } from "react";

import { Button, Box, TextField,Typography, Stack, Alert, Container } from "@mui/material";


const Reverse = () => {
  const [string, setString] = useState("");
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [validation, setValidation] = useState(false);

 

  const submitHandler = (e) => {
    e.preventDefault();
    reverse(string);
    setShow(true);
    checkPalindrome(string);
    console.log(checkPalindrome());
    if (string !== "") {
      setValidation(true);
    } else {
      alert("Inserire la stringa!");
    }
  };

  const reverse = (str) => {
    let s = "";
    for (let i = str.length - 1; i >= 0; i--) {
      s += str[i];
    }
    console.log(string, name);
    setName(s);
  };

  const resetHandler = () => {
    setShow(false);
    setString("");
    setValidation(false);
    
  };

  const checkPalindrome = (isPalindroma) =>{
    isPalindroma  = name === string;
      if(isPalindroma){
        return 'La stringa è palindroma';
      }else{
        return 'La stringa non è palindroma';
      }
  }  

  return (
    <Container sx = {{bgcolor: '#eeeeee'}}>
      <Box onSubmit={submitHandler}
      component="form" 
           
    >
      <Stack spacing={3} direction="row">
      <Typography variant="h6">
      Inserisci la parola:  
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
          <Typography variant="h5"> {name}</Typography>{" "}


          <Alert variant="h5" style={{color: name === string ? "green" : "red" }}> {checkPalindrome()}</Alert>{" "}    

          <Button onClick={resetHandler} variant="contained"> Cancella </Button>{" "}

        </div>
      ) : null}

    </Container>
      
  );
};

export default Reverse;
