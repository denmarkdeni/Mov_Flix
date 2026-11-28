import { useState } from "react";
import Child from "./child";

export default function Parent(){
    const [movies , setMovies] = useState({
        today : ["vikram" , "jailer" , "leo"],
        name : "pvr cinemas",
        location : "chennai"
    });
    return(
        <div className="home">
            <h1>parent</h1>
            <Child name={movies.name} location={movies.location} />
        </div>
    )
}