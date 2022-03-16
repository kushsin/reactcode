import { Button } from "bootstrap";
import react from "react";
function Card(props){
    return(
    <div className="cards">
      <div className="card">
        <img className="card_img"
        src= {props.imgsrc}/>
        <div className="card_info">
          <span className="card_catagary"> {props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
            <a href={props.link} target="_blank">
              <button>Watch Now </button>
            </a>
        
        </div>
      </div>
      

    </div>
    
    );
    }
export default Card;    