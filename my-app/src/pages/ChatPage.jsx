// dobar pattern za SVE obrasce
import { ChatForm } from "../components/ChatForm";
import { Message } from "../components/Message";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";


export function ChatPage(props) {
    const [client, setClient] = useState(null);
    const [chatRoom, setChatRoom] = useState(null);
    const [ready, setReady] = useState(false);
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
         time = {message.time}
      />);
 }; // ne ovako

 const messageComponents2 = messages.map((message)=> {
     return (<Message
             key={message.id}
             author={message.author.username}
             text={message.text}
             avatar={message.author.avatarIndex}
             time= {message.time}
          />);
     }); // ovo je bolje


     function handleSubmit(message) {
        client.publish({
            room: "general",
            message: message,
  });
    };

    useEffect(() => {
        const drone = new window.Scaledrone("fKtuq1ZynQbBUDab");

        drone.on("open", (error) => {
          if (error) {
            console.log(error);          
          }
          else {
            const room = drone.subscribe("general");
            
            setClient(drone);
            setChatRoom(room);

          
          }
        });
    },[]);




    useEffect(()=> {
        if (chatRoom !== null && !ready ) {
            chatRoom.on("data", (data) => {
                setMessages((messages) => {
                    console.log(messages);
                    return [...messages, data ];
                });
                
            });
            setReady(true);
        }
    },[chatRoom, ready]);





    if (!context.isSignedIn) {
        return <Navigate to="/" replace />
    };

   
    function handleSignOut() {
        context.setUsername("");
    }


    return (
        <div>
            Chat Page
            <div className="message-list">
                {messageComponents2}
            </div>    
            <ChatForm onSubmit={handleSubmit} username={props.username} avatarIndex={props.avatarIndex} />
            <button type="button" onClick={handleSignOut} >Log out</button>
            
        </div>
    );
};