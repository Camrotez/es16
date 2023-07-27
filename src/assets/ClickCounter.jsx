import { useState } from "react";

function ClickCounter(){
    const [count,setCount] = useState(0)
    const newCount =() =>{
        setCount(count +1)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={newCount}>click!</button>
        </div>
    )
}
export default ClickCounter