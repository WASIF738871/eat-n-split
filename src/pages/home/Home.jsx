import { AddFriend, Button, FarmSplitBill, FriendsList } from "../../components";
import "./home.css";

const Home = () => {
  return <div className="app">
    <div className="sidebar">
      <FriendsList/>
      <AddFriend/>
      <Button>add friend</Button>
    </div>
    <div>
      <FarmSplitBill/>
    </div>
  </div>;
};

export default Home;
