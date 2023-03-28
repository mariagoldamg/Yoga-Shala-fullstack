import { useDispatch } from "react-redux";
import dataShop from "../data/dataShop";
import { removeItem } from "../Redux/cartSlice";


const CartItem = ({cartItem})=>{
    const dispatch = useDispatch();
    const items = dataShop.find(item=> item.id===cartItem.itemId
    )
    return(
        <div>
           <img className="cartPic" alt="shop" src = {`${items.img}.jpeg`}/>
            <p>{items.name}</p>
            <p>{cartItem.quantity} item(s)</p>
            <p>Price: ${items.price*cartItem.quantity}</p>
           <span onClick ={()=> dispatch (removeItem({cartItemId:cartItem.id}))}> <img className="binIcon" alt="icon" 
            src={`https://cdn-icons-png.flaticon.com/512/1221/1221090.png?w=996&t=st=1676189308~exp=1676189908~hmac=0a9f6fb0d20effcb777bf50d0e08ab0616982109f0486d84c490e60c565d6745`}/>
        </span>
        <p>----------------------------------</p>
        </div>
    )
}

export default CartItem;