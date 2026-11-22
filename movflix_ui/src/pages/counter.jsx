import { useState } from "react"

export default function Counter(){
    let [number , setNumber] = useState(0);
    function increase(){
        setNumber(number + 1);
    }

    return (
        <div className="home"> 
            {/* react fragment */}
            <h1>Counter</h1>
            <div className="counter">
                {number}
            </div>
            <button onClick={increase}>add</button>
            <button onClick={()=>{setNumber(number - 1)}}>decrease</button>
            <button onClick={()=>{setNumber(0)}}>reset</button>
        </div>
    )
}