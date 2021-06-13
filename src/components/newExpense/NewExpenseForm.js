import './css/newExpenseForm.css';
import {useState} from "react";


function NewExpenseForm() {
    const [entertitle, setTitle] = useState("");
    const [enteredAmount, setAmount] = useState("");
    const [entereddate, setDate] = useState("");
    const titleHandler = (event) => {
        setTitle(event.target.value);
    }
    const amountHander = (event) => {
        setAmount(event.target.value);
    }
    const datehandler = (event) => {
        setDate(event.target.value);

    }
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input onChange={titleHandler} type='text'/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input onChange={amountHander} type="number" min="0.01" step="0.01"/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input onChange={datehandler} type='date' min="2019-01-01" max="2020-01-01"/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>);
}

export default NewExpenseForm;