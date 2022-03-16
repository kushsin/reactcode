import react from "react";
import Sdata from "./Sdata";
import Card from "./Card";
const Amazon = () =>{
    return(
        <>
   <Card 
    sname = {Sdata[4].sname} 
    imgsrc = {Sdata[4].imgsrc}
    title = {Sdata[4].title}
    link = {Sdata[4].link}
    
    />
    <Card 
    sname = {Sdata[5].sname} 
    imgsrc = {Sdata[5].imgsrc}
    title = {Sdata[5].title}
    link = {Sdata[5].link}
    />
    <Card 
   sname = {Sdata[3].sname} 
   imgsrc = {Sdata[3].imgsrc}
   title = {Sdata[3].title}
   link = {Sdata[3].link}

/>
    <Card 
    sname = {Sdata[4].sname} 
    imgsrc = {Sdata[4].imgsrc}
    title = {Sdata[4].title}
    link = {Sdata[4].link}
    
    />
    <Card 
    sname = {Sdata[5].sname} 
    imgsrc = {Sdata[5].imgsrc}
    title = {Sdata[5].title}
    link = {Sdata[5].link}
    />
        </>
    )
}
export default Amazon;
