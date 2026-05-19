export default function SearchInput({ inputRef }) {         //Receiving the inputRef from the parent component
    return (
        <input
            placeholder="Looking for something?"
            ref={inputRef}   //Passing the ref to the input element
        />
    );
}
