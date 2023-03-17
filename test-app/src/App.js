import { useState } from "react";
import { GuestPage } from "./guests/containers/GuestPage";
import { OrdersPage } from "./orders/containers/OrdersPage";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  function handleSignIn() {
    setIsSignedIn(true);
  };


  return (
    <div>
      {!isSignedIn && <GuestPage onSignIn={handleSignIn} />}
      {isSignedIn && <OrdersPage onSignOut={() => setIsSignedIn(false)} />}
    </div>
  );
}

export default App;
