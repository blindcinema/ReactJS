import { InputFormField } from "../components/InputFormField";
import { Message } from "../components/Message";
import { SubmitFormField } from "../components/SubmitFormField";

export function ChatPage() {
    return (
        <div>Chat Page
            <div className="message-list">
                <Message author="Steve" text="Message1" />
                <Message author="Joe" text="Message2" />
            </div>    

            <div className="form-container">
                <form className="chat-form" >
                    <InputFormField label="Message:" type="text" id="Message"  />
                    <SubmitFormField text="Send message" />
                </form>
            </div>
        </div>
    );
};