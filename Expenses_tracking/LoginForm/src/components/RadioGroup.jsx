
export default function RadioGroup({ label, name, value, options, onChange }) {
    return (
        <div>
            <label>{label}</label>
            {options.map((option) =>
                <label key={option}>    //IF we are using map we need to consider a key to each item for a unique ID to indentify each items
                    <input type="radio" name={name} value={option} onChange={onChange} checked={option === value} />
                    {option}
                </label>
            )}
        </div>
    )
}