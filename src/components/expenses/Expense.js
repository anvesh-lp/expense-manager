import ExpenseItem from "./ExpenseItem";
import './css/expense.css';
import ExpensesFilter from "../expenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import {useState} from "react";

function Expense(props) {
    const [selectValue, setSelectValue] = useState("2020");

    const selectValueHandler = (selectedvalue) => {
        console.log("selected value from expense");
        console.log(selectedvalue);
        setSelectValue(selectedvalue)
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onSeletValueChanged={selectValueHandler} seletedYear={selectValue}/>
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
            </Card>
        </div>
    );
}

export default Expense;