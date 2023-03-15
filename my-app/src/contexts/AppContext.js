import React from "react";
import { useState } from "react";
export const AppContext = React.createContext("Please Use app provider");

export const AppConsumer = AppContext.Consumer;

export function AppProvider(props) {
    const [username, setUsername] = useState("");
    const [avatarIndex, setAvatarIndex] = useState(0);

    return (
        <AppContext.Provider value={{
            username: username,
            setUsername:setUsername,
            avatarIndex:avatarIndex,
            setAvatarIndex:setAvatarIndex,
            isSignedIn: username !== "",
        }}>
            {props.children}
        </AppContext.Provider>
    );
};