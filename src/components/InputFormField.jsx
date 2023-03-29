import "../styles/InputFormField.css"
import { FormField } from "./FormField";


export function InputFormField(props) {
function handleChange(event) {
    props.onChange(event.target.value);
    
};
    return (
        <FormField>
                                <label htmlFor={props.id}>{props.label}</label>
                                <input type={props.type} id={props.id} onChange={handleChange} value={props.value} />
        </FormField>                    
    );
};