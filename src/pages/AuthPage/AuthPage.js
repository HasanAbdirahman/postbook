import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LogInForm from "../../components/LoginForm/LogInForm";
import { MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogIn] = useState(false);

  return (
    <div className="AuthPage" style={{ display: "flex" }}>
      <h1 style={{ textAlign: "center" }}>Authentication</h1>
      <MDBBtn
        onClick={() => setShowLogIn(!showLogin)}
        outline
        rounded
        className="mx-2"
        color="primary"
      >
        {showLogin ? "SIGN UP" : "LOG IN"}
      </MDBBtn>

      {showLogin ? (
        <LogInForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </div>
  );
}
