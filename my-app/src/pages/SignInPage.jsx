import { useState } from "react";
import { InputFormField } from "../components/InputFormField";
import { RandomNameButton } from "../components/RandomNameButton";
import { SubmitFormField } from "../components/SubmitFormField";



export function SignInPage(props) {
    const stateArray = useState('');
    const formState = stateArray[0];
    const setFormState = stateArray[1];
    // const [ formState, setFormState ] = useState('');
    



    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(formState);
    };

    function handleUsernameChange(value) {  
        setFormState(value);
        

    };

    console.log(formState);

    return (
        <div className="sign-in-page">
            <div className="card">
                <form className="sign-in-form" onSubmit={handleSubmit}>
                    <InputFormField label="Username" type="text" id="Username" onChange={handleUsernameChange} value={formState} /> 
                    <RandomNameButton onRandomName={handleUsernameChange} />
                    <SubmitFormField text="Sign In" />
                </form>     
            </div>
               
        </div>
    );
};