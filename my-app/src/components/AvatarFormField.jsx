import { FormField } from "./FormField";
import { useState } from "react";
import { avatarImages } from "../library/avatar";



export function AvatarFormField(props) {
    


    const [index, setIndex] = useState(0);
    props.onChange(index);

    function forwardIndex() {
        setIndex(index + 1);
        if (index >= avatarImages.length -1) {
            setIndex(0);
        };
        

        
    };
    function backIndex() {
        
        setIndex(index - 1);
        if (index <= 0) {
            setIndex(avatarImages.length -1);
        };
    };

    return (
        <FormField>
            <button onClick={backIndex} type="button">Previous</button>
            <img src={"/avatars/" + avatarImages[index]} alt={index} width={100}/>
            <button onClick={forwardIndex} type="button">Next</button>

        </FormField>
    );
};