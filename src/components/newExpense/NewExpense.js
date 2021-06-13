import NewExpenseForm from "./NewExpenseForm";
import './css/newexpense.css';
import {useState} from "react";

function NewExpense(props) {
    const [isEditing, setisEditing] = useState(false);

    const oneNewExpenseFormSubmit = (newExpense) => {
        const expense = {...newExpense, id: Math.random().toString()};
        props.onNewExpense(expense);
    }
    const enableEditing = () => {
        setisEditing(true);
    }
    const disableEditingMode = () => {
        setisEditing(false);
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={enableEditing}>Add new Expense</button>}
            {isEditing &&
            <NewExpenseForm setEditingMode={disableEditingMode} onNewExpenseHandler={oneNewExpenseFormSubmit}/>}
        </div>);
}

export default NewExpense;