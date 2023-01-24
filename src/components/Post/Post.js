import { useState } from "react";

export default function Post() {
  // this holds the state of the post
  const [post, setPost] = useState({});
  return (
    <div className="Post">
      Post
      <aside></aside>
      {/* onSubmit={} */}
      <form>
        <label for="title">Title: </label>
        <input placeholder="title" id="title" />
        <textarea
          id="txtid"
          name="txtname"
          rows="4"
          cols="50"
          maxlength="200"
        />
        <label for="private">Private</label>
        <input type="checkbox" id="private" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
