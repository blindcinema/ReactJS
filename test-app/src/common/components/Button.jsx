export function Button(props) {
    return (
        <button onClick={props.onClick}>{props.label}</button>
    );
}