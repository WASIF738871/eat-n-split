import {Button} from '../index'
const FarmSplitBill = ({name}) => {
  return (
    <form className="form-split-bill">
        <h2>Split a bill with {name}</h2>
        <label htmlFor="">💴Bill value</label>
        <input type="text" />
        <label htmlFor="">👤Your expense</label>
        <input type="text" />
        <label htmlFor="">👥{name} expense</label>
        <input type="text" disabled/>
        <label htmlFor="">😁Who is paying the bill?</label>
        <select name="" id="">
            <option value="">you</option>
            <option value="">{name}</option>
        </select>
        <Button>Split bill</Button>
    </form>
  )
}

export default FarmSplitBill