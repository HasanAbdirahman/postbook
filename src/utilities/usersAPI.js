import sendRequest from "./sendRequest";
const BASE_URL = "/api/users";
export function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

export function login(userLoggedIn) {
  return sendRequest(BASE_URL + "/login", "POST", userLoggedIn);
}
