export default function ColorSwitch({ onChangeColor }) {
    return (
        <button onClick={e => {
            e.stopPropagation()   //Using stopPropagation to prevent the event from bubbling up to the parent component
            onChangeColor()
        }} >
            Change color
        </button>
    );
}
