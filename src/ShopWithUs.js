
import Cart from './Cart/Cart';
import AllCategories from './Filter/AllCategories';
import ShopItems from './ShopComponents/ShopItems';



function ShopWithUs() {
  return (
    <div className="App">

      <div className='block'>
     <AllCategories/>
     <Cart/>
     
     </div>

     <div className='block'>
     <ShopItems/>
     </div>
     

    </div>
  );
}

export default ShopWithUs;
