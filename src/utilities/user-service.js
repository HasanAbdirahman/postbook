import * as usersAPI from "./usersAPI";
export async function signUp(credentials) {
  const token = await usersAPI.signUp(credentials);
  localStorage.setItem("token", token);
  console.log(getUser());
  return getUser();
}

export async function login(credentials) {
  const token = await usersAPI.login(credentials);
  localStorage.setItem("token", token);
  return getUser();
}

export function getToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  const payload = JSON.parse(atob(token.split(".")[1]));

  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem("token");
    return null;
  }
  return token;
}
export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export function logout() {
  localStorage.removeItem("token");
}
