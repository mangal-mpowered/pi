import React from "react";
import Bookshelf from "./Bookshelf";

function App(){
    return(
        <div>
            <Bookshelf 
            imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJ0jj9viwi0pjDsl8r9rKcFf8YZjx7AXEVA&usqp=CAU"
            name="Information"
            />
            <Bookshelf 
            imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZWH1PcPg8kf_L46T1RTL4OCMzQJ8ZOdCbA&usqp=CAU"
            name="English"
            />
            <Bookshelf 
            imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJ0jj9viwi0pjDsl8r9rKcFf8YZjx7AXEVA&usqp=CAU"
            name="The Black"
            />
            
        </div>
    )
}

export default App;