export default function SearchButton({ onClick }) {  //Receiving the onClick function from the parent component

    return (
        <button onClick={onClick}>   {/*Calling the onClick function on click*/}
            Search
        </button>
    );
}
