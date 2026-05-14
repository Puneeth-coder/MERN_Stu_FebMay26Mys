//useEffect lifecycle
//No array :every render
//[]emptty array:once
//[count],value:on mount + when state changes
import { useEffect, useState } from "react";

export function UseEffectLifeCycle() {
    const [count,setcount]=useState(0);
    //No dependency array
    useEffect(()=>{
        console.log("Effect 1:runs after every render");
    });

    //2.Empty dependency array
    //This runs only once after the components mounts.
     useEffect(()=>{
        console.log("Effect 2:runs only once after mountr");
    },[]);

    //3.dependency based effect
     useEffect(()=>{
        console.log("Effect 3:Count changed to ",count);

        return()=>{
            console.log("Cleanup for effect 3:previous count:",count);
        }
    },[count]);

    //Event handler
    function handleIncrement() {
        setcount((prevCount)=>prevCount+1);
    }
    function handleReset() {
        setcount(0);
    }
    return(
        <section>
            <h2>useEffect LifeCycle</h2>
            <p>Count:{count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
        </section>
    )
}