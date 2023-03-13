import { avatarImages } from "../library/avatar";


export function Message(props) {
    return (
        <div className="message">
                    <img src={ "/avatars/" + avatarImages[props.avatar]} alt={props.avatar} width={100} height={100}></img>
                    <div className="message-author">{props.author}</div>
                    <div className="message-text">{props.text}</div>
                </div>
    );
}