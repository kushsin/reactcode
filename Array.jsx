import react from "react";
import Sdata from "./Sdata";
import Card from "./Card";
 
//const curdate = new Date().toLocaleDateString();
  //const curtime  = new Date().toLocaleTimeString();


 const Array = () => {

    return(
<>
  <h1 className="heading_style"> List of <span style={{color:"red"} }>Top 20</span> Netflix Series and with <span style={{color:"red"}}>full intertenment</span> </h1>
  <hr className="horiz"></hr>
    <Card 
    sname = {Sdata[0].sname} 
    imgsrc = {Sdata[0].imgsrc}
    title = {Sdata[0].title}
    link = {Sdata[0].link}
    />
    
    <Card 
    sname = {Sdata[1].sname} 
    imgsrc = {Sdata[1].imgsrc}
    title = {Sdata[1].title}
    link = {Sdata[1].link}
    />
    <Card 
   sname = {Sdata[2].sname} 
   imgsrc = {Sdata[2].imgsrc}
   title = {Sdata[2].title}
   link = {Sdata[2].link}

/>
<Card 
    sname = {Sdata[3].sname} 
    imgsrc = {Sdata[3].imgsrc}
    title = {Sdata[3].title}
    link = {Sdata[3].link}

/>
<Card 
   sname = {Sdata[2].sname} 
   imgsrc = {Sdata[2].imgsrc}
   title = {Sdata[2].title}
   link = {Sdata[2].link}

/>
<Card 
    sname = {Sdata[3].sname} 
    imgsrc = {Sdata[3].imgsrc}
    title = {Sdata[3].title}
    link = {Sdata[3].link}

/>
 
    

       </>

    );
 }
 export default Array;