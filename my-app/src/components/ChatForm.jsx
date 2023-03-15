import { SubmitFormField } from "../components/SubmitFormField";
import { InputFormField } from "../components/InputFormField";
import { AppContext } from "../contexts/AppContext";


import { useState } from "react";
import { useContext } from "react";

export function ChatForm(props) {

    const context = useContext(AppContext);
    const [ formState, setFormState] = useState("");
    console.log(formState);




    function handleSubmit(event) {
        event.preventDefault();
        setFormState("");
        props.onSubmit(
            {
                id: Date.now(),
                author: {
                    username: context.username,
                    avatarIndex: context.avatarIndex,
                },
            text: formState,
            }
        )
        };
    function handleChange(message) {
        setFormState(message);
    };



    return (

        <div className="form-container">
                <form className="chat-form" onSubmit={handleSubmit} >
                    <InputFormField label="Message:" type="text" id="Message" value={formState} onChange={handleChange}  />
                    <SubmitFormField label="Send message" />
                </form>
            </div>
    );
};