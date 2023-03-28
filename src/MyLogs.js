
import { TiDeleteOutline, TiEdit } from "react-icons/ti"

export const MyLogs = ({text,updatingInInput,deleteLog})=>{
    return (
        <div>
<div className=""><p className="myLog">{text}</p></div>
<div className="editIcon">
<TiEdit className="inputIcon" onClick={updatingInInput}></TiEdit>
<br></br>
<TiDeleteOutline className="inputIcon" onClick={deleteLog}></TiDeleteOutline>
</div>
        </div>
    )
}