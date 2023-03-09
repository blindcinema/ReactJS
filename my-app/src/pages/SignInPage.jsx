import { useState } from "react";
import { InputFormField } from "../components/InputFormField";
import { RandomNameFormField } from "../components/RandomNameFormField";
import { getRandomName } from "../library/random";
import "../styles/SubmitFormField.css";
import { SubmitFormField } from"../components/SubmitFormField";
import { FormField } from "../components/FormField";
import { RandomNameButton } from "../components/RandomNameButton";
import { Button } from "../components/Button";
import { AvatarFormField } from "../components/AvatarFormField";

export function SignInPage(props) {
    const stateArray = useState(getRandomName());
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

    const [avatar, setAvatar] = useState("");

    function handleAvatarChange(value) {
        setAvatar(value);
    }
    console.log(avatar);
    return (
        <div className="sign-in-page">
            <div className="card">
                <form className="sign-in-form" onSubmit={handleSubmit}>
                    <InputFormField label="Username" type="text" id="Username" onChange={handleUsernameChange} value={formState} /> 
                    
                    
                    <FormField>
                    <AvatarFormField onChange={handleAvatarChange} />
                        <RandomNameButton onRandomName={handleUsernameChange} label="Get random name"/>
                    </FormField>
                    <FormField >
                        <Button type="submit" label="Sign In"/>  
                    </FormField>

                </form>
                 
            </div>
               
        </div>
    );
};