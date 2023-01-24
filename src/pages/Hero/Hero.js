import Logout from "../Logout/Logout";
import Post from "../../components/Post/Post";
export default function Hero({ user, setUser }) {
  return (
    <div>
      <Logout user={user} setUser={setUser} />
      <Post />
    </div>
  );
}
