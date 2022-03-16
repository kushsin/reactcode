import react  from "react";
import './index.css';
import Project from "./Project";
const heading = "Contrary to popular belief, Lorem Ipsum is no";
const img1 = <img src="https://picsum.photos/263"></img>
const img2 = <img src="https://picsum.photos/261"></img>
const img3 =  <img src="https://picsum.photos/260"></img>
const img4 =  <img src="https://picsum.photos/268"></img>
const style ={
  color:"white"
}
const Navbar = () =>{
    return(
<>
<div>
<ul>
  <a><Project/></a>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
<h1 contentEditable style={{
          color:"orange", 
          textAlign:"center",
          marginTop:"20px"
 }}>{heading}</h1>
<div className="set_img">
<a href="https://www.chetu.com">{img1}</a>

<a>{img2 }</a>
<a>{img3}</a>
<a>{img4}</a>


</div>
<button className="btn_">Read More Item</button>
</div>


</>
    );
}
export default Navbar;