import { useState } from "react";
import { SignInPage } from "./pages/SignInPage";
import { ChatPage } from "./pages/ChatPage";



function App() {
  const [username, setUsername] = useState("");

  function handleName(username) {
    setUsername(username);
  };
  console.log(username);

  return (
    <div className="App">
      {username === "" && <SignInPage onSubmit={handleName} />}
      {username !== "" && <ChatPage />}
    </div>
  );
};

export default App;
