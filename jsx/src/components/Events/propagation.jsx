function Button({ onClick, children }) {
    return (
        <button onClick={e => {
            e.stopPropagation();  //This will stop the event from bubbling up to the parent component
            onClick();    //This will run when the button is clicked
        }}>
            {children}  {/*Children are the contents of the component*/}
        </button>
    );
}

export default function Toolbar() {
    return (
        <div className="Toolbar" onClick={() => {
            alert('You clicked on the toolbar!');
        }}>
            <Button onClick={() => alert('Playing!')}>
                Play Movie
            </Button>
            <Button onClick={() => alert('Uploading!')}>
                Upload Image
            </Button>
        </div>
    );
}
