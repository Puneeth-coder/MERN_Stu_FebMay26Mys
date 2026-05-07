// Stop event Propagation
export function EventObj() {
    const hadleParentClick = (event)  => {
        alert(`Parent clicked target: ${event.target.tagName} currentTarget: ${event.currentTarget.tagName}`);
    };

     const hadleChildClick = (event)  => {
        event.stopPropagation();
        alert(`Child clicked  (Propagation stopped) target: ${event.target.tagName} currentTarget: ${event.currentTarget.tagName}`);
    };

    // form submit handler
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Form submitted safely by preventing default refresh");
    };

    const handleBoxClick = (event) => {
        alert(`Box clicked target: ${event.target.tagName} currentTarget: ${event.currentTarget.tagName}`);
    };
    return(
        <section onClick={hadleParentClick} style={{padding:'20px', backgroundColor:'yellow'}}>
            <h2>Event Object</h2>

            <button onClick={hadleChildClick}>Child Button</button>
            <button onClick={handleSubmit}>Submit form</button>

            <div onClick={handleBoxClick} style={{padding:'20px', backgroundColor:'red'}}>
                <span style={{padding:'20px', backgroundColor:'blue', display:'inline-block'}}>
                    Inner Span
                </span>
            </div>
        </section>
    )
};