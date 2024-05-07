import { useState } from "react";
import {
  AddFriend,
  Button,
  FarmSplitBill,
  Friend,
  FriendsList,
} from "../../components";
import "./home.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const Home = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const handleAddFriend = (friend) => {
    setFriends([...friends, friend]);
    handleToggle();
  };
  const handleToggle = () => {
    setShowAddFriend(!showAddFriend);
    setSelectedFriend(null);
  };
  const handleSelection = (friend) => {
    setSelectedFriend((current) => (current?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  };

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null)
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          initialFriends={friends}
          selectedFriend={selectedFriend}
          onSelect={handleSelection}
        />
        {showAddFriend && (
          <AddFriend onAddFriend={handleAddFriend} onToggle={handleToggle} />
        )}
        <Button onToggle={handleToggle}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      <div>
        {selectedFriend && (
          <FarmSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
