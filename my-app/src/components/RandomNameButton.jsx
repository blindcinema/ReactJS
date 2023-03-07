import { Button } from "./Button";
import { getRandomName } from "../library/random";





export function RandomNameButton(props) {
    function handleClick() {
        props.onRandomName(getRandomName());
    }
    return  (
        <Button label={props.label} onClick={handleClick} type="button"/>

    );
}