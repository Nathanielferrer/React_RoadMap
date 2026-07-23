
export default function RadioGroup({ label, name, value, options, onChange }) {
    return (
        <div>
            <label>{label}</label>
            {options.map((option) => // The map will loop through every item of option {expenses or income then it
                <label key={option}>
                    <input type="radio" name={name} value={option} onChange={onChange} checked={option === value} />
                    {option}    {/* This will display the option (income, expense) */}
                </label>
            )}
        </div>
    )
}