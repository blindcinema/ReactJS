
import '../styles/Button.css';

/* HOC primjer
    funkcija koja vraca funkciju/komponentu 
    "a higher-order component is a function that takes a component and returns a new component"


    posebna mapa hoc u src
    funkcija withLogging.js
    export function withLogging(Component) {
        return (props) => <Component {...props} onClick={() => console.log("new click"); props.onClick();} />;

    }
    u Button.jsx 
    const ButtonWithLogging = withLogging(Button);


*/




export function Button(props) {

    return (
        <button className="button" type={props.type} onClick={props.onClick}>{props.label}</button>

    );
};