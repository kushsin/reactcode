import react from "react";
const Slot = (props) => {
   /* var a = '😄';
    var b = '😄';
    var c = '🔥';*/
    var x = props.x;
    var y= props.y;
    var z = props.z;
    

    if(x===y && y===z){
        return (
            <div className="fire">
                <h1 style={{textAlign:'center'}}>{x}{y}{z}</h1>
                 <h3 style={{textAlign:'center'}}>This is matching</h3>
                 <hr/>
                 
            </div>
        );
    }else{
        return(
            <div className="fire">
                <h1 style={{textAlign:'center'}}>{x}{y}{z}</h1>
             <h3 style={{textAlign:'center'}}>This is not matching</h3>
             <hr></hr>
            </div>
        );
        }
}
const Slotemachine = () => {
    return (
        <>
        <h1 style={{textAlign:'center'}}>🎰 Welcome to <span style={{fontWeight:"bold", color:'blue'}}> slot machine game </span>🎰</h1>
        <div className="slotm">
        <Slot x = '🏳️‍🌈' y = '🏳️‍🌈' z = '🏳️‍🌈' />
        <Slot x = '😄' y = '😍' z = '😄' />
        <Slot x = '🔥' y= '🥇' z = '🤽' />
        <Slot x = '😄' y = '😄' z = '😄' />

        </div>
        
        </>
    )
}
export default Slotemachine;