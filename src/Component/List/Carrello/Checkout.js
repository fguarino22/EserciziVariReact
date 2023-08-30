import { useSelector, useDispatch } from "react-redux"
import { removefromCart } from "../../../redux/cartSlice";




function Checkout() {
    const cartItems = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Cart Items</h2>
            {
                cartItems.map((item, index) => {
                    return (
                        <div>
                            <img src={item.data} alt="" />
                            <div>
                                <h4>{item.title}</h4>
                                <button onClick={() => dispatch(removefromCart({ id: index }))}>Remove</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    );
}
export default Checkout;