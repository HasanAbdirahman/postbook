// user and log in the login form is wrong getUser() and user() is wrong
import { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import * as userService from "../../utilities/user-service";
export default function SignUpForm({ setUser }) {
  const [newUser, setNewUser] = useState({
    firstname: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  function handleChange(evt) {
    setNewUser({ ...newUser, [evt.target.name]: evt.target.value, error: "" });
  }

  async function handleClick(evt) {
    try {
      let formData = { ...newUser };
      delete formData.confirm;
      delete formData.error;

      let user = await userService.signUp(formData);
      setUser(user);
    } catch {
      setNewUser({ ...newUser, error: "Sign Up Failed- Try Again" });
    }
  }
  const disabled = newUser.password !== newUser.confirm;
  return (
    <MDBContainer fluid style={{ backgroundColor: "magenta" }}>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="First Name"
                  id="form1"
                  type="text"
                  name="firstname"
                  className="w-100"
                  value={newUser.firstname}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="Last Name"
                  name="lastName"
                  id="form2"
                  type="text"
                  className="w-100"
                  value={newUser.lastName}
                  onChange={handleChange}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  label="Your Email"
                  id="form3"
                  type="email"
                  name="email"
                  value={newUser.email}
                  onChange={handleChange}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput
                  label="Password"
                  name="password"
                  id="form4"
                  type="password"
                  value={newUser.password}
                  onChange={handleChange}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size="lg" />
                <MDBInput
                  label="Repeat your password"
                  name="confirm"
                  id="form5"
                  type="password"
                  value={newUser.confirm}
                  onChange={handleChange}
                />
              </div>

              <MDBBtn
                className="mb-4"
                size="lg"
                disabled={disabled}
                onClick={handleClick}
              >
                Register
              </MDBBtn>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
          <p className="error-message">&nbsp;{newUser.error}</p>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
