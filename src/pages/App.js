import "./App.css";
import AuthPage from "./AuthPage/AuthPage";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <h1>Hasan</h1>
      {user ? <h1>Hasan</h1> : <AuthPage />}
    </div>
  );
}

export default App;
