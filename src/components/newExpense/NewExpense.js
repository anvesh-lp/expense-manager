import NewExpenseForm from "./NewExpenseForm";
import './css/newexpense.css';

function NewExpense(props) {

    const oneNewExpenseFormSubmit = (newExpense) => {
        const expense = {...newExpense, id: Math.random().toString()};
        props.onNewExpense(expense);
    }
    return (
        <div className='new-expense'>
            <NewExpenseForm onNewExpenseHandler={oneNewExpenseFormSubmit}/>
        </div>);
}

export default NewExpense;