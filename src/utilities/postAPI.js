import sendRequest from "./sendRequest";
const BASE_URL = "/api/post";

export function addpost(userPosts) {
  return sendRequest(BASE_URL, "POST", userPosts);
}

export function getAllPost() {
  return sendRequest(BASE_URL + "/all");
}

export function deletePost(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}

export function getEdit(id, data) {
  console.log(id);
  return sendRequest(`${BASE_URL}/${id}/edit`, "PUT", data);
}
