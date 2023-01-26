import React from "react";
import { Link } from "react-router-dom";
import Logout from "../../pages/Logout/Logout";
export default function Sidebar({ openSideBar, user, setUser }) {
  return (
    <div className="Sidebar">
      <div className="burger" onClick={openSideBar}>
        <i class="ri-menu-fill"></i>
      </div>
      <div className="separate">
        <Link to="/post">
          <button style={{ fontWeight: 500, fontSize: 20 }}>Add a post</button>
        </Link>
      </div>
      <div className="separate">
        <Logout user={user} setUser={setUser} />
      </div>
    </div>
  );
}
