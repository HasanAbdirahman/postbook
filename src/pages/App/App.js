import "remixicon/fonts/remixicon.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import { useState } from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { getUser } from "../../utilities/user-service";
import IndexPage from "../IndexPage/IndexPage";
import Post from "../../components/Post/Post";
import NavBar from "../../components/NavBar/NavBar";
import EditForm from "../../components/editForm/editForm";

function App() {
  const [user, setUser] = useState(getUser());
  const [sidebar2, setSidebar2] = useState(false);

  const toggleSidebar = () => {
    setSidebar2((prevValue) => !prevValue);
  };

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar
            closeSideBar={toggleSidebar}
            user={user}
            setUser={setUser}
            sidebar2={sidebar2}
          />
          <Routes>
            <Route path="/post/:userId/edit" element={<EditForm />} />
            <Route path="/post" element={<Post user={user} />} />
            <Route path="/posts/all" element={<IndexPage user={user} />} />
            <Route path="/*" element={<IndexPage user={user} />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
