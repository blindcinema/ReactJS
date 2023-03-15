import { FormField } from "../components/FormField";
import { RandomNameButton } from "../components/RandomNameButton";
import { Button } from "../components/Button";
import { AvatarFormField } from "../components/AvatarFormField";
import { useState } from "react";
import { InputFormField } from "../components/InputFormField";
import { getRandomName } from "../library/random";


export function SignInForm(props) {
    
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
    };


    return (
        <form className="sign-in-form" onSubmit={handleSubmit}>
                    <InputFormField
                        label="Username"
                        type="text"
                        id="Username"
                        onChange={handleUsernameChange}
                        value={formState} /> 
                    
                    
                    <FormField>
                        <AvatarFormField onChange={handleAvatarChange} />
                        <RandomNameButton onRandomName={handleUsernameChange} label="Get random name"/>

                    </FormField>
                    <FormField >

                        <Button type="submit" label="Sign In"/>  

                    </FormField>

                </form>
    );
};