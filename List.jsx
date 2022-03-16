import React, { useState } from "react";
const  Curtime = () => {

    let time = new Date().toLocaleTimeString();
    const [ctime, setctime] = useState(time);

    const UpdateTime = () =>{
time = new Date().toLocaleTimeString();
setctime(time);
    };
    setInterval(UpdateTime, 1000);
    return(
        <>
        <h4>{ctime}</h4>
        </>
    );
};
export default Curtime;