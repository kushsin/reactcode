import react from "react";
import { useState } from "react/cjs/react.development";


const Thetime  = () =>{
    var dat = new Date().toLocaleTimeString();
    const [ctime,settime] =useState(dat);
    const the = () =>{
        var dat = new Date().toLocaleTimeString();
        settime(dat)
    }
    setInterval(the,1000);
    var date = new Date().toLocaleDateString();
    var a = new Date().getHours();
    var greeting = "";
    const styl = {};
if (a >= 1 && a < 12 ){
    greeting = "good morning";
    styl.color = "red";
}else if(a >= 12 && a < 16){
    greeting = "goog afternoon";
    styl.color = "blue";
}else if(a >= 16 && a < 22){
    greeting = "good evening";
    styl.color = "yellow";
}
else{
    greeting = "good night"
    styl.color = "blue";
}
    const set = {
           marginTop: "100px",
            textTransform: "capitalize",
            display: 'flex',
           justifyContent: "center",
            alignItems: "center"
    }
    return(
        <>
        
      
        
                <div  style={set}>
        <h1 >{ctime} <br></br><span style={styl}> {greeting} </span> </h1>
        <h2>{date}</h2>
        </div>
    
       
        
        </>
    )

}
export default Thetime;