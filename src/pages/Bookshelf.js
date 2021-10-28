import React from "react";

function Bookshelf(props){
    return(
        <div >
            <img src={props.imgurl}/>
            <p style={{fontSize:30, backgroundColor:"#0000FF",borderRadius:20}}>{props.name}</p>
        </div>
    )
}
export default Bookshelf;