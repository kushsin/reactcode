import react from "react";

const Style = () =>     {
    var img = "https://picsum.photos/200/300";
    const img2 = "https://picsum.photos/201/300";
    const img3 = "https://picsum.photos/202/300";
    const h = {
        
            textAlign: "center",
            textTransform: "capitalize",
            color: "lightsalmon",
            margin: "40px 0px"
        
    }
    const p = {
        textAlign: "center",
        textTransform: "capitalize",
        color: "blueviolet",
        marginBottom: "40px",
        textDecoration:"none"
    }

   const imag = {
    display: "flex",
    textAlign: "center",
    justifyContent: "center"
   }

   const btn = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginLeft: "600px" ,
    marginTop: "40px",
    backgroundColor: "aquamarine",
    color: "black",
    padding:" 20px 30px",
    border: "none",
    borderRadius: "30px"
   }
  
return(
    <>
    <h1 style={h}>the data from strach the power of </h1>
    <a href="https://www.google.com"><p style={p}>Lorem Ipsum is simply dummy text of the printing and typesetting</p></a>
   
   <div   style={imag}
   className="img">
   <img className="img2" src={img} alt="randam_img" />
   <img className="img2" src={img2} alt="randam_img" />
   <img className="img2" src={img3} alt="randam_img" />
   </div>
<button style={btn} >see more images</button>
    </>
)
}
export default Style;
