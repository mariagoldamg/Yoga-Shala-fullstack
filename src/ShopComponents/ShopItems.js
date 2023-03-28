import Item from "./Item";
import dataShop from "../data/dataShop";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../Redux/itemsSlice";

const ShopItems =()=>{
    const selectedCategory = useSelector(getSelectedCategory);

    return(<div>
       {dataShop
       .filter (item=>{ return selectedCategory === item.category;
       })
       .map((item,index)=><Item key={index} item={item}/>)}
    </div>)
}

export default ShopItems;