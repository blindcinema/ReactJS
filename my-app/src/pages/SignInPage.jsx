import { useState } from "react";
import { InputFormField } from "../components/InputFormField";
import { getRandomName } from "../library/random";
import "../styles/SubmitFormField.css";
import { FormField } from "../components/FormField";
import { RandomNameButton } from "../components/RandomNameButton";
import { Button } from "../components/Button";
import { AvatarFormField } from "../components/AvatarFormField";
import { Counter } from "../components/Counter";

export function SignInPage(props) {
    const stateArray = useState(getRandomName());
    const formState = stateArray[0];
    const setFormState = stateArray[1];
    // const [ formState, setFormState ] = useState('');
    
    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(
            {
            username: formState,
            avatarIndex: avatar,
            }
        );
};

    function handleUsernameChange(value) {  
        setFormState(value);
        

    };


    const [avatar, setAvatar] = useState("");

    function handleAvatarChange(value) {
        setAvatar(value);
    }
    return (
        
        <div className="sign-in-page">
            <Counter initialValue={10} step={5.123123} precision={2} />
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