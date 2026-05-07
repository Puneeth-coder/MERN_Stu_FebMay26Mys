// Synthetic event vs Native DOM events 
// Synthetic event: 
// is a wrapper created by React around the browser's native event 
// This gives consistent API across browser
// works similarly to native DOM events 
// still allows access to the original browser events via event.nativeEvent

// Why does React use it?
// to make event handling behave consistently 
// to simplify cross-browser differences
// to integrate smoothly with React's event system

// How synthetic event works:
// Component renders:
    //  A button appears on the screen
    // handleClick is defined but it is not executed

// User clicks the button:
    // Browser creates a native click event
    // React wraps that native event in a syntheticEvent 
    // React passes the syntheticEvent to handleClick

    // event refers to the syntheticEvent
    // event.target gives us the HTML elements
    