import { useState } from "react";


const YogaSliders=({yogaItem})=>{

    const [showMore,setShowMore] = useState(false);

    return(
        <div>
<div>
    <br></br>
<div className="yogaBlock">
    <h4>{yogaItem.name}</h4>
<img alt='logo' src = {`${yogaItem.img}.jpeg`}/>
<br></br>
<p>{ showMore ? yogaItem.description : yogaItem.description.substring(0,60) + '...'}
<button className="showMore" onClick={()=> setShowMore(!showMore)}>
    {showMore?'Show less':"Show More"}
</button>
</p>

<p className="time">{yogaItem.category}</p>
<p className="time">{yogaItem.days}: {yogaItem.time}</p>



</div>
</div>

        </div>
    )



}


export default YogaSliders;

