import Friend from "./Friend";

const FriendsList = ({ initialFriends,selectedFriend, onSelect }) => {
  return (
    <ul>
      {initialFriends.map((friend) => (
        <Friend key={friend.id} selectedFriend={selectedFriend} friend={friend} onSelect={onSelect}/>
      ))}
    </ul>
  );
};

export default FriendsList;
