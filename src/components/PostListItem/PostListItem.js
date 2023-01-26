import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import * as postAPI from "../../utilities/postAPI";
import NavBar from "../NavBar/NavBar";

export default function PostListItem({ oneObject, trigger, user, setTrigger }) {
  const [like, setLike] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setLike(JSON.parse(window.localStorage.getItem("like")));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("like", like);
  }, [like]);

  const handleClickLikeButton = () => {
    return setLike((prevValue) => prevValue + 1);
  };
  function handleEditClick(id) {
    navigate(`/post/${id}/edit`);
  }
  async function handleDelete(id) {
    //alert(user.id);
    await postAPI.deletePost(id);
    setTrigger(!trigger);
  }
  return (
    <>
      <main className="sophia">
        <Card>
          <Card.Body>
            <Card.Title>{oneObject.title}</Card.Title>
            <Card.Text>{oneObject.content}</Card.Text>
            <Button
              variant="primary"
              value={like}
              onClick={handleClickLikeButton}
            >
              👍
            </Button>
            <p>{like}</p>
            {oneObject.postedBy == user._id ? (
              <>
                <Button
                  variant="secondary"
                  onClick={() => handleEditClick(oneObject._id)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(oneObject._id)}
                >
                  DELETE
                </Button>
              </>
            ) : (
              <></>
            )}
          </Card.Body>
        </Card>
      </main>
    </>
  );
}
