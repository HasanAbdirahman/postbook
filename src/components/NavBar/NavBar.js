import Sidebar from "../../components/Sidebar/Sidebar";
import Sidebar2 from "../../components/Sidebar2/Sidebar2";
import Backdrop from "../../components/Backdrop/Backdrop";
export default function NavBar({
  closeSideBar,
  user,
  setUser,
  sidebar2 = { sidebar2 },
}) {
  return (
    <div>
      <Backdrop sidebar={sidebar2} closeSideBar={closeSideBar} />
      <Sidebar2 sidebar={sidebar2} />
      <Sidebar openSideBar={closeSideBar} user={user} setUser={setUser} />
    </div>
  );
}
