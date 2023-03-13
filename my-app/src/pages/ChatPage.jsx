import { InputFormField } from "../components/InputFormField";
import { Message } from "../components/Message";
import { SubmitFormField } from "../components/SubmitFormField";
import { useState } from "react";


export function ChatPage(props) {
    const [messages, setMessages] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        setMessages(
            [...messages,
            {
                id: Date.now(),
                author: {
                    username: props.username,
                    avatarIndex: props.avatarIndex,
                },
            text: formState,
            }
        ]);
        setFormState("");
    };
    function handleChange(message) {
        setFormState(message);
    };
    const [ formState, setFormState] = useState("");
    console.log(formState);

    const messageComponents = [];

    for (let i = 0; i < messages.length; i++) {
        const message = messages[i]; 
        messageComponents.push(<Message
            key={message.id}
            author={message.author.username}
            text={message.text}
            avatar={message.author.avatarIndex}
         />);
    };

    const messageComponents2 = messages.map((message)=> {
        return (<Message
                key={message.id}
                author={message.author.username}
                text={message.text}
                avatar={message.author.avatarIndex}
             />);
        }); // bolji nacin



    return (
        <div>
            Chat Page
            <div className="message-list">
                {messageComponents2}
            </div>    

            <div className="form-container">
                <form className="chat-form" onSubmit={handleSubmit} >
                    <InputFormField label="Message:" type="text" id="Message" value={formState} onChange={handleChange}  />
                    <SubmitFormField label="Send message" />
                </form>
            </div>
        </div>
    );
};