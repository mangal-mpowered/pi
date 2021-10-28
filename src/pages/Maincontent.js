import React from "react";
const style={
    fontSize:30,
    backgroundColor:"#FF0000",
};
function Maincontent() {
    return(
        
        <div >
            <h1 style={style}>LogIn</h1>
            <label > User Name</label><br/>
            <input /><br/>
            <label > Password</label><br/>
            <input /><br/>
            <input type="submit"></input>

            <h1>Show Checkboxes</h1>
            <input type="checkbox"></input>
            <label > I have a bike</label><br/>
            <input type="checkbox"></input>
            <label > I have a car</label><br/>
            <input type="checkbox"></input>
            <label > I have a boat</label><br/>
            <input type="submit"></input>
        </div>
    )
    
};
export default Maincontent;