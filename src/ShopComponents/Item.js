import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../Redux/cartSlice";

const Item =({item})=>{
    const [quantity,setQuantity] = useState(1);
const dispatch = useDispatch();
const [add,setAdd] = useState(true);
const btnText = add ? "Add to Cart" : "Added";
const handleClick =()=>{
    dispatch(addItemToCart({item,quantity}));
    setAdd(false)
}
    return (
        <div>
            <img alt="shop" src = {`${item.img}.jpeg`}/>
            <div className="item">
                <div className="itemName">
            <h4> { item.name } </h4></div>
            <p> ${ item.price } </p>
            <ChangeQuantity quantity={quantity} setQuantity ={setQuantity}/>
            <br></br>
            <button className="addToCart" onClick={handleClick}>{btnText}</button>

            </div>
        </div>
    )
}

export default Item;