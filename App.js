import react from "react";
import "./index.css";
import Navbar from "./Navbar";
import Style from "./Style";
import Amazon from "./Amazom";
import Array from "./Array";
import Slotemachine from "./Slotemachine";  
import "./index.css";

 
   function App(){
   
    const Series = () => {
      const favshow = "amazon";
      if (favshow === "amazon"){
        return <Array></Array>
        }else{
          return <Amazon/>
        };
      }
      return(
        <>
        <Navbar/>
        <Style/> 
         <Series/>
         <Slotemachine/>
         </>
      )
   }
export default App;
