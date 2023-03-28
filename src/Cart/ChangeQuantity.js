const ChangeQuantity =({quantity, setQuantity})=>{

    const removeQuantity =()=>{ 
        if(quantity<=1)return;
        const newQuantity = quantity-1;
        setQuantity(newQuantity);
    }

    const addQuantity =()=>{
        const newQuantity = quantity+1;
        setQuantity(newQuantity);
    }

    return(<div>
        <button onClick={removeQuantity} className="quantity">-</button>
       <span>{quantity}</span>
       <button onClick={addQuantity} className="quantity">+</button>
    </div>)
}

export default ChangeQuantity;