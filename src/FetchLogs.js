import axios from 'axios';


const getAllLogs = (setLog) => {
    axios.get('https://yoga-shala-backend.onrender.com')
    .then (({data})=>{console.log (data)
    setLog(data)
    })
}

const addLog = (name,setName,setLog)=>{
    axios.post ('https://yoga-shala-backend.onrender.com/saveLog', {name})
    .then ((data)=>{console.log(data);
    setName('')
    getAllLogs(setLog)
    })
}

const editLog = (logId,name,setName,setLog,setEditing)=>{
    axios.post ('https://yoga-shala-backend.onrender.com/editLog', {_id:logId,name})
    .then ((data)=>{console.log(data);
    setName('')
    setEditing(false)
    getAllLogs(setLog)
    })
}

const deleteLog = (_id, setLog)=>{
    axios.post ('https://yoga-shala-backend.onrender.com/deleteLog', {_id})
    .then ((data)=>{console.log(data);
    getAllLogs(setLog)
    })
}

export {getAllLogs, addLog, editLog, deleteLog}