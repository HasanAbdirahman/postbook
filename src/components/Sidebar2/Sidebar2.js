import { Link } from "react-router-dom";
export default function Sidebar2({ sidebar }) {
  return (
    <div className={sidebar ? "Sidebar2 Sidebar--open " : "Sidebar2"}>
      <Link to="/">
        <li>
          <i class="ri-home-fill"></i>
          Home
        </li>
      </Link>
      <Link to="/posts/all">
        <li>All Post</li>
      </Link>
      <Link to="/post">
        <li>Create a post</li>
      </Link>
    </div>
  );
}
