import Navbar from "../Common/Header";
import { Container, Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from '../Common/Footer'




function Summary() {
    const cartItems = useSelector(state => state.cart.cart);
    let navigate = useNavigate();
    console.log(navigate);

    return (
        <div>

            <Navbar VisibleElements={{ arrow: true }} />

            <Container sx={{ marginBottom: 3 }}>
                <Box sx={{ marginBottom: 3 }}>
                    <h2>Il tuo ordine è composto da: </h2>
                    {
                        cartItems.map((item, _) => {
                            return (

                                <Box sx={{ border: 1, borderColor: 'primary.main' }}>
                                    <img src={item.data} alt="" />
                                    <div>
                                        <Typography sx={{ marginLeft: 2 }} variant="h8">{item.title}</Typography>
                                    </div>
                                </Box>

                            )
                        })
                    }
                </Box>


                <Button variant="contained" sx={{ marginRight: 3 }} onClick={() => navigate('/pagamento')}>Conferma</Button>

                <Button variant="contained" onClick={() => navigate('/checkout')}>Annulla</Button>


            </Container>

            <Footer />


        </div>



    );
}
export default Summary;