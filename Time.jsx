import react, { useState } from "react";

const  Time = () =>{
let date =  new Date().toLocaleTimeString();
const[ctime,settime] = useState(date);

const update = () =>{

    date =  new Date().toLocaleTimeString(); 
    settime(date); 
};
setInterval(update, 1000);  
return (
<>
<h4>{ctime}</h4>
</>
);

};
export default Time;