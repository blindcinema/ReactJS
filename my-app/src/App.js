import { useState } from "react";
import { SignInPage } from "./pages/SignInPage";
import { ChatPage } from "./pages/ChatPage";





function App() {
  const [username, setUsername] = useState("");
  const [avatarIndex, setAvatarIndex] = useState(0);

  function handleName(user) {
    setUsername(user.username);
    setAvatarIndex(user.avatarIndex);

  };


  return (
    <div className="App">
  
      {username === "" && <SignInPage onSubmit={handleName} />}
      {username !== "" && <ChatPage username={username} avatarIndex={avatarIndex} />}
      
    </div>
  );
};

export default App;
