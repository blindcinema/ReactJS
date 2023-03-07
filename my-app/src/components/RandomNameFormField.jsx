import { RandomNameButton } from "./RandomNameButton";
import { Button } from "./Button";
import "../styles/RandomNameFormField.css"


export function RandomNameFormField(props) {
    return (
        <div className="random-name-form-field">
        <Button label="Sign In" type="submit" />
        <RandomNameButton label="Get random name" type="button" onRandomName={props.onRandomName} />
        </div>
    );
}