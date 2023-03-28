
import Filter from "./Filter";

const AllCategories =()=>{
    return(<div>
        <h2>Shop with YogaShala:</h2>
        {['CLOTHING','GEAR', 'MEDITATION', 'GIFTCARD']
        .map ((category,index)=> <Filter key={index} category={category}/>)}

    </div>)
}

export default AllCategories;