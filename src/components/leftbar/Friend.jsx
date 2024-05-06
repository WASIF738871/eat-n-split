import Button from "./Button";

const Friend = ({ friend }) => {
  return (
    <li>
      <img src={friend.image} alt={friend.name} className="img" />
      <h3>{friend.name}</h3>
      {
        friend.balance<0 && <p style={{color:"red"}}>You owe {friend.name} {Math.abs(friend.balance)}€</p>
      }
      {
        friend.balance>0 && <p style={{color:"green"}}>{friend.name} owes you {Math.abs(friend.balance)}€</p>
      }
      {
        friend.balance==0 && <p style={{color:"red"}}>You and {friend.name} are even</p>
      }
      <Button>selcet</Button>
    </li>
  );
};

export default Friend;
