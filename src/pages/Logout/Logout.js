import { MDBBtn } from "mdb-react-ui-kit";
import * as ali from "../../utilities/user-service";
export default function Logout({ setUser }) {
  function handleClick() {
    ali.logout();
    setUser(null);
  }
  return (
    <div>
      <MDBBtn
        className="mb-4 px-5"
        color="dark"
        size="lg"
        onClick={handleClick}
      >
        LogOut
      </MDBBtn>
    </div>
  );
}
