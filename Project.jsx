
//import Curtime from "./List"
import react from "react";
import Time from "./Time";

function Project(){    
let curDate = new Date();
curDate = curDate.getHours()
let greting  ='';
const cssstyle = {};
if(curDate  >=  1  &&  curDate < 12){
  greting = "Good Morning";
  cssstyle.color = "green";
}else if(curDate >= 12 && curDate < 17){
  greting = "Good Afternoon";
  cssstyle.color = "orange";
}else if (curDate >= 17 && curDate < 22){
  greting = "Good Evening";
  cssstyle.color = "blue";
}
else{
  greting = "Good Night";
  cssstyle.color = "black"
}
const currentdate = new Date().toLocaleDateString();

 return (
    <>
    <div> 
      <h2>Hello Kush,  <span style ={cssstyle}>{greting}</span>
      </h2>
      <h6 >{currentdate}</h6>
     <h3><Time/></h3>  
    </div>
  
    </>
 );
 }
 export default Project;