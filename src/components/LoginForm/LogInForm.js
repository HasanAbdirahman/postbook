import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import * as userService from "../../utilities/user-service";
export default function LogInForm({ setUser }) {
  const [userLogedIn, setUserLoggedIn] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setUserLoggedIn({ ...userLogedIn, [evt.target.name]: evt.target.value });
    setError("");
  }
  async function handleClick(evt) {
    try {
      let log = await userService.login(userLogedIn);
      setUser(log);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }
  return (
    <div>
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: "#ff6219" }}
                  />
                  <span className="h1 fw-bold mb-0">PostBook</span>
                </div>

                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Sign into your account
                </h5>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  name="email"
                  value={userLogedIn.email}
                  onChange={handleChange}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  name="password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  value={userLogedIn.password}
                  onChange={handleChange}
                  required
                />

                <MDBBtn
                  className="mb-4 px-5"
                  color="dark"
                  size="lg"
                  onClick={handleClick}
                >
                  Login
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
            <p className="error-message">&nbsp;{error}</p>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}
