// Basic Events concepts in React
// What is an Event?
// An action triggered by the user (mouse, keyboard, DOM related event).
// React uses camelCase attributes like onClick, onChange.
// React passes an event object is called (SyntheticEvent) to the event handler.

export function EventBasics() {
    // Declaring a event handler function
    const handleClick = () => alert("Clicked");
    return(
        <section>
            <h2>Basic Events</h2>
            {/* Event binding */}
            <button onClick={handleClick}>
                Click me
            </button>
        </section>
    )
}