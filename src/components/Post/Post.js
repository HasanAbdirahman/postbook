import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./post.css";

import * as postAPI from "../../utilities/postAPI";
import NavBar from "../NavBar/NavBar";
export default function Post({ user }) {
  // this holds the state of the post
  const [content, setcontent] = useState([
    {
      title: "",
      content: "",
    },
  ]);

  const navigate = useNavigate();
  function handleChange(evt) {
    setcontent({ ...content, [evt.target.name]: evt.target.value });
  }
  async function handleSubmit(evt) {
    evt.preventDefault();
    let creatingPost = await postAPI.addpost(content);
    setcontent(creatingPost);
    navigate("/posts/all");
  }

  return (
    <div className="Post">
      <h1>Please fill the form</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <li>
          <label style={{ display: "block" }} htmlFor="name">
            Title:
          </label>
          <input
            placeholder="title"
            name="title"
            value={content.title}
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
            cols="50"
            maxLength="200"
            value={content.content}
            onChange={handleChange}
            required="required"
          />
        </li>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
