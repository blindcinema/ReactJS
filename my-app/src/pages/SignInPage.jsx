
import "../styles/SubmitFormField.css";
import { useContext } from "react";

import { Counter } from "../components/Counter";
import { SignInForm } from "../components/SignInForm";
import { AppContext } from "../contexts/AppContext";

export function SignInPage() {
    const context = useContext(AppContext);

    function handleSubmit(formData) {
        context.setUsername(formData.username);
        context.setAvatarIndex(formData.avatarIndex);
    }
    return (
        
        <div className="sign-in-page">
            <Counter initialValue={10} step={5.123123} precision={2} />
            <div className="card">
             <SignInForm onSubmit={handleSubmit}/>
            </div>
               
        </div>
    );
};