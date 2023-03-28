import { useDispatch, useSelector } from "react-redux";
import { filteredCategory, getSelectedCategory } from "../Redux/itemsSlice";

const Filter =({category})=>{
    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();
    return(<div>
       <p onClick={()=> {dispatch(filteredCategory(category))}}
       className= {selectedCategory === category ? 'categoryButtonSelected' : 'categoryButton'}>{ category }</p>
    </div>)
}

export default Filter;
