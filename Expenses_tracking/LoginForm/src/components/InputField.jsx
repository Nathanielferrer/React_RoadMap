
export default function InputField({ label, type, name, value, onChange }) {    //Props: label, type, name, value, onChange (this is where we pass the data from the parent component)
    return (
        <div>
            <label>{label}</label>   {/*This is the label for the input field*/}
            <input
                type={type} //This is the type of the input field
                name={name} //This is the name of the input field
                value={value} //This is the value of the input field
                onChange={onChange} //This is the function that will handle the state change
            />
        </div>
    );
}