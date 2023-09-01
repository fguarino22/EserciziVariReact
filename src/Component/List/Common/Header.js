import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Carrello from "../Carrello/Kart";
import { useNavigate } from "react-router-dom";


export default function Navbar({ VisibleElements }) {
    let navigate = useNavigate();
    return (
        <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >

                    {VisibleElements.arrow && (
                        < ArrowBackIcon onClick={() => navigate(-1)} />
                    )
                    }



                </IconButton>
                <Typography variant="h6"
                    component="div" sx={{ flexGrow: 1 }}>
                    Lista Personalizzata
                </Typography>

                {VisibleElements.kart && (
                    <Carrello />
                )
                }


            </Toolbar>
        </AppBar>
    );
}
