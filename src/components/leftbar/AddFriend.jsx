import Button from "./Button";

const AddFriend = () => {
  return <form className="form-add-friend">
    <label htmlFor="">👤Friend name</label>
    <input type="text" />
    <label htmlFor="">🖼️Image URL</label>
    <input type="text" />
    <Button>add</Button>
  </form>;
};

export default AddFriend;
