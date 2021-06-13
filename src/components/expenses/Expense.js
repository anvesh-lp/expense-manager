import ExpenseItem from "./ExpenseItem";
import './css/expense.css';

function Expense(props) {
    return (
        <div className="expenses">
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
                item={props.items[0].item}>
            </ExpenseItem>
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
                item={props.items[1].item}>
            </ExpenseItem>
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
                item={props.items[1].item}>
            </ExpenseItem>
        </div>
    );
}

export default Expense;