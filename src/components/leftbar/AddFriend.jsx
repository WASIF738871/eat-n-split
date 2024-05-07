import { useState } from "react";
import Button from "./Button";

const AddFriend = ({ onAddFriend }) => {
  const [friend, setFriend] = useState({
    name: "",
    image: "https://i.pravatar.cc/48",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!friend.name || !friend.image) return alert("Please provide friends name or image!");
    const id = crypto.randomUUID();
    const friendObj = {
      id: id,
      ...friend,
      balance: 0,
      image: `${friend.image}?u=${id}`,
    };
    onAddFriend(friendObj);
    setFriend({
      name: "",
      image: "https://i.pravatar.cc/48",
    });
  };
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👤Friend name</label>
      <input
        type="text"
        name="name"
        value={friend.name}
        onChange={(e) =>
          setFriend({ ...friend, [e.target.name]: e.target.value })
        }
      />
      <label>🖼️Image URL</label>
      <input
        type="text"
        name="image"
        value={friend.image}
        onChange={(e) =>
          setFriend({ ...friend, [e.target.name]: e.target.value })
        }
      />
      <Button>Add</Button>
    </form>
  );
};

export default AddFriend;
