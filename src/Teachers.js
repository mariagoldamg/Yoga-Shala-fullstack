import { useState } from "react";
import dataTeachers from "./data/dataTeachers";

const Teachers=()=>{

const [teacher, setTeacher] = useState(0);
const {image,name,yoga,line} = dataTeachers[teacher]

const previousTeacher=()=>{
    setTeacher((teacher=>{
        teacher--;
if(teacher<0){
    return dataTeachers.length-1
}
return teacher;
    
    }))
}

const nextTeacher=()=>{
    setTeacher((teacher=>{
        teacher++;
if(teacher>dataTeachers.length-1){
    teacher=0;
}
return teacher
    }))
}
    return(
        <div>
            <div className="teacherContainer">
                <img src={image} width="500px" alt="teacher"/>
                <p><span className="time">{yoga}</span> teacher <span className="time">{name}</span></p>
             <p className="line">{line}</p>
            </div>
<div className="buttonContainer">
    <button onClick = {previousTeacher} className="addToCart">Previous</button>
    <button onClick={nextTeacher} className="addToCart">Next</button>
</div>

        </div>
    )

    
}

export default Teachers;