import React, { useState } from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from '../../../redux/loginSlice';

function Login() {
    let navigate = useNavigate();
    const [credenziali, setCredenziali] = useState({ email: "", password: "" });
    const { email, password } = credenziali;
    const [errors, setError] = useState([]);


    const dispatch = useDispatch();

    const validate = () => {
        const error = [];
        if (!email) {
            error.email = "Il campo email è obbligatorio";
        } else {
            error.email = "";
        }
        if (!password) {
            error.password = "Il campo password è obbligatorio";
        } else if (password.length < 8) {
            error.password = "Password da almeno 8 caratteri";
        } else {
            error.password = "";
        }
        return error;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const errors = validate();
        setError(errors);

        dispatch(login({
            email: email,
            password: password
        }));

    };

    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) =>
                            setCredenziali({ ...credenziali, email: e.target.value })
                        }
                    />
                    {errors.email && <Box sx={{ color: '#e53935' }}>{errors.email}</Box>}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) =>
                            setCredenziali({ ...credenziali, password: e.target.value })
                        }


                    />
                    {errors.password && <Box sx={{ color: '#e53935' }}>{errors.password}</Box>}



                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                        Sign In
                    </Button>

                    <Grid item>
                        Non hai un account?
                        <Link onClick={() => navigate('/registrazione')} variant="body3" underline="none">
                            {" Registrati ora"}
                        </Link>
                    </Grid>

                </Box>
            </Box>

        </Container>

    );
}
export default Login;