import { useState } from 'react'
import {Button} from '../index'
const FarmSplitBill = ({selectedFriend, onSplitBill}) => {
  const [splitData, setSplitData] =useState({
    bill:'',
    paidByUser:'',
    whoPay:'user'
  });
  const friendExpense = splitData.bill?splitData.bill-splitData.paidByUser:""
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!splitData.bill || !splitData.paidByUser) return alert("Please enter bill or your expense.")
      onSplitBill(splitData.whoPay==='user'?friendExpense:-splitData.paidByUser)
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriend.name}</h2>
        <label htmlFor="">💴Bill value</label>
        <input type="text" name='bill' value={splitData.bill} onChange={(e)=>setSplitData({...splitData,[e.target.name]:e.target.value})}/>
        <label htmlFor="">👤Your expense</label>
        <input type="text" name='paidByUser' value={splitData.paidByUser} onChange={(e)=>setSplitData({...splitData,[e.target.name]:e.target.value})} />
        <label htmlFor="">👥{selectedFriend.name} expense</label>
        <input type="text" disabled value={friendExpense}/>
        <label htmlFor="">😁Who is paying the bill?</label>
        <select name="" id="" name='whoPay' onChange={(e)=>setSplitData({...splitData,[e.target.name]:e.target.value})}>
            <option value='user'>You</option>
            <option value={selectedFriend.name}>{selectedFriend.name}</option>
        </select>
        <Button>Split bill</Button>
    </form>
  )
}

export default FarmSplitBill