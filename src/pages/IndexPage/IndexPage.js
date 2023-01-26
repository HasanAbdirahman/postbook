import PostListItem from "../../components/PostListItem/PostListItem";
import { useEffect, useState } from "react";
import * as postAPI from "../../utilities/postAPI";
import NavBar from "../../components/NavBar/NavBar";
export default function IndexPage({ user }) {
  const [posts, setPosts] = useState([]);
  const [trigger, setTrigger] = useState(false);

  useEffect(
    function () {
      async function getAllPosts() {
        const postsDB = await postAPI.getAllPost();
        setPosts(postsDB);
      }
      console.log(posts);
      getAllPosts();
    },
    [trigger]
  );

  let each = posts?.map((oneObject, idx) => (
    <PostListItem
      trigger={trigger}
      setTrigger={setTrigger}
      user={user}
      key={idx}
      oneObject={oneObject}
    />
  ));

  return (
    <div className="IndexPage">
      <h1 style={{ textAlign: "center" }}>Check out all the posts</h1>

      {each}
    </div>
  );
}
