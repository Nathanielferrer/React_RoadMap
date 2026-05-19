export default function Signup() {
    return (
        <form onSubmit={e => {      //This e is stand for event
            e.preventDefault();   //add an e.preventDefault() to prevent the default behavior of the form which is to reload the page
            alert('Submitting!');   //alert to show that the form is submitted
        }}>
            <input />
            <button>Send</button>   {/*This is a button  */}
        </form>
    );
}
