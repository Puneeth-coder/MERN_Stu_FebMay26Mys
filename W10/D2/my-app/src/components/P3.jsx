// useRef  hook
// useRef creates a mutable reference object 
// The object has one property: current
// It presists accross renders

import { useEffect, useRef, useState } from "react";

// Why do we use it?
// Direct DOM access
// Presisting values without triggering re-renders

export function UserRefIntro() {
    // 1. Reference : DOM : That will point to the input element

    const inputRef = useRef(null);

    // 2. Value reference: This stores the previous count 
    // 

    const previousCountRef = useRef(0);

    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    useEffect(()=>{
        inputRef.current.focus();
    });

    useEffect(()=>{
        previousCountRef.current = count;
    },[count]);

    const handleFocusInput = () => {
        inputRef.current.focus();
    };

    const handleIncrement = () => {
        setCount((prev)=>prev+1);
    };

    return(
        <section>
            <div>
                <h3>1. Focus input using useRef</h3>
                <input type="text" value={text} ref={inputRef} onChange={(e)=>setText(e.target.value)} placeholder="Enter Something"/>
                <button onClick={handleFocusInput}>Focus Input</button>
            </div>
            <div>
                <h3>2. Store previous value using useRef</h3>
                <p>Current count: {count}</p>
                <p>Previous count: {previousCountRef.current}</p>
                <button onClick={handleIncrement}>
                    Increment Count
                </button>
            </div>
        </section>
    )
}