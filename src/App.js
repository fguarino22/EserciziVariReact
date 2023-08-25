import './App.css';

import React from "react";

import Reverse from './Component/Palindroma/Main';
import Header from './Component/Common/Header';
import Image from './Component/Palindroma/image/tramonto.jpg';


import { Container } from '@mui/system';


function App() {
  return (
    <Container>
        <Header title='Gioco della parola al contrario, scopri se la parola è palindroma!' img={Image}/>
        <br /><br />
        <Reverse />
       
    </Container>
    
  );
}

export default App;
