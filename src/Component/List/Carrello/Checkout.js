import { useSelector, useDispatch } from "react-redux"
import { removefromCart } from "../../../redux/cartSlice";
import Navbar from "../Common/Header";
import Copyright from "../Common/Footer";
import { Container, Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Checkout() {
    const cartItems = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    return (
        <div>

            <Navbar VisibleElements={{ arrow: true, kart: false }} />

            <Box sx={{ maxHeight: '100%', marginBottom: 5 }}>
                <Container sx={{ marginBottom: 3 }}>
                    <Box sx={{ marginBottom: 3 }}>
                        <h2>Oggetti aggiunti al carrello: {cartItems.length}</h2>
                        {
                            cartItems.map((item, index) => {
                                return (

                                    <Box sx={{ border: 1, borderColor: 'primary.main' }}>
                                        <img src={item.data} alt="" />
                                        <div>

                                            <Typography sx={{ marginLeft: 2 }} variant="h8">{item.title}</Typography>                                            <Container sx={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end", marginTop: -3, marginBottom: 3 }}>
                                                <Button variant="contained" sx={{ height: 30, width: 80 }} onClick={() => dispatch(removefromCart({ id: index }))}>Remove</Button>
                                            </Container>
                                        </div>
                                    </Box>

                                )
                            })
                        }
                    </Box>

                    <Button variant="contained" onClick={() => navigate('/ordine')}>Procedi all'ordine</Button>                </Container>
            </Box>

            <Copyright />
        </div>

    );
}
export default Checkout;