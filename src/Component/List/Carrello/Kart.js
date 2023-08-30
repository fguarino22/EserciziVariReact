import { useSelector } from "react-redux/es/hooks/useSelector";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

function Carrello() {

    const cartItems = useSelector(state => state.cart.cart)
    return (
        <div>
            <Link to='/Checkout'>

                <h3><AddShoppingCartIcon /> <small>{cartItems.length}</small></h3>
            </Link>
        </div>
    );
}
export default Carrello;


