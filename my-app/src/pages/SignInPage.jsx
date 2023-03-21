
import "../styles/SubmitFormField.css";
import { useContext } from "react";
import { Counter } from "../components/Counter";
import { SignInForm } from "../components/SignInForm";
import { AppContext } from "../contexts/AppContext";
import { Navigate } from "react-router-dom";
import { Motd } from "../components/Motd";
;

export function SignInPage() {

    

    const context = useContext(AppContext);



    function handleSubmit(formData) {
        context.setUsername(formData.username);
        context.setAvatarIndex(formData.avatarIndex);
    }



    if (context.isSignedIn) {
        return <Navigate to="/chat" replace />
    }

    return (
        
        <div className="sign-in-page">
            <Motd></Motd>
            <Counter initialValue={10} step={5.123123} precision={2} />
            <div className="card">
             <SignInForm onSubmit={handleSubmit}/>
            </div>
               
        </div>
    );
};