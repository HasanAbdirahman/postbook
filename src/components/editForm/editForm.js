import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./editForm.css";
import * as postAPI from "../../utilities/postAPI";
export default function EditForm() {
  let { userId } = useParams();
  const [changed, setChanged] = useState({
    title: "",
    content: "",
  });
  let navigate = useNavigate();

  function handleChange(evt) {
    setChanged({ ...changed, [evt.target.name]: evt.target.value });
  }
  async function handleSubmit(evt) {
    evt.preventDefault();
    //body that comes
    await postAPI.getEdit(userId, changed);
    navigate("/posts/all");
  }

  return (
    <div className="editForm">
      <h1>Please fill the form to edit the post</h1>
      <form onSubmit={handleSubmit}>
        <li>
          <label htmlFor="name">Title:</label>
          <input
            placeholder="title"
            name="title"
            value={changed.title}
            onChange={handleChange}
            id="title"
            required="required"
          />
        </li>
        <li>
          <label style={{ display: "block" }} htmlFor="mail">
            Content:
          </label>
          <textarea
            id="txtid"
            name="content"
            rows="4"
            //   cols="50"
            maxLength="200"
            value={changed.content}
            onChange={handleChange}
            required="required"
          />
        </li>
        <button style={{ display: "block" }} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
