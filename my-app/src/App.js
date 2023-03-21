import { useContext } from "react";
import { SignInPage } from "./pages/SignInPage";
import { ChatPage } from "./pages/ChatPage";
import { AppContext } from "./contexts/AppContext";
import {Routes, Route} from 'react-router-dom';




function App() {


  return (
    <div className="App">

      <Routes>
        <Route path="/">
          <Route index element={<SignInPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
