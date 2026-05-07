// Accessibility for custom Clickable elements 
// To make non-button element behave like a accessible button

export function Accessibility() {
    const handleClick = () => {
        alert('Custom button clicked');
    };
    return(
        <section>
            <h2>Accessiblity</h2>
            <div role="button" tabIndex={0} onClick={handleClick} style={{padding:'20px', backgroundColor:'blue'}}>
                Custom Acceaaible Button
            </div>
            <button onClick={handleClick}>Real button</button>
        </section>
    );
};