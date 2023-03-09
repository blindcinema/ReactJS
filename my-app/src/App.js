import { useState } from "react";
import { SignInPage } from "./pages/SignInPage";
import { ChatPage } from "./pages/ChatPage";
import { Counter } from "./components/Counter";
import { AvatarFormField } from "./components/AvatarFormField";



function App() {
  const [username, setUsername] = useState("");

  function handleName(username) {
    setUsername(username);
  };
  console.log(username);

  return (
    <div className="App">
      <Counter initialValue={10} step={5.123123} precision={2} />
      {username === "" && <SignInPage onSubmit={handleName} />}
      {username !== "" && <ChatPage />}
      
    </div>
  );
};

export default App;
