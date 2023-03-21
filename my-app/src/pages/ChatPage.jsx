// dobar pattern za SVE obrasce
import { ChatForm } from "../components/ChatForm";
import { Message } from "../components/Message";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Navigate } from "react-router-dom";


export function ChatPage(props) {

    const context = useContext(AppContext);



 const messageComponents = [];
 const [messages, setMessages] = useState([]);

 for (let i = 0; i < messages.length; i++) {
     const message = messages[i]; 
     messageComponents.push(<Message
         key={message.id}
         author={message.author.username}
         text={message.text}
         avatar={message.author.avatarIndex}
      />);
 }; // ne ovako

 const messageComponents2 = messages.map((message)=> {
     return (<Message
             key={message.id}
             author={message.author.username}
             text={message.text}
             avatar={message.author.avatarIndex}
          />);
     }); // ovo je bolje


     function handleSubmit(message) {
        setMessages(
            [...messages,message]);
    };


    if (!context.isSignedIn) {
        return <Navigate to="/" replace />
    };

   



    return (
        <div>
            Chat Page
            <div className="message-list">
                {messageComponents2}
            </div>    
            <ChatForm onSubmit={handleSubmit} username={props.username} avatarIndex={props.avatarIndex} />
            
        </div>
    );
};