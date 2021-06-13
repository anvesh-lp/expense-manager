import ExpenseItem from "./ExpenseItem";
import './css/expense.css';
import ExpensesFilter from "../expenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import {useState} from "react";
import ExpenseChart from "./ExpenseChart";

function Expense(props) {
    const [selectValue, setSelectValue] = useState("2020");


    const selectValueHandler = (selectedvalue) => {
        console.log(selectedvalue);
        setSelectValue(selectedvalue);
    }
    const filteredArray = props.items.filter(item => (item.date.getFullYear().toString() === selectValue));

    let renderExpensesList = <p className="showErrors">No Expenses..Add one</p>
    if (filteredArray.length !== 0) {
        renderExpensesList = filteredArray.map(i => (<ExpenseItem
                key={i.id}
                title={i.title}
                amount={i.amount}
                date={i.date}
                item={i.item}/>
        ));
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onSeletValueChanged={selectValueHandler} seletedYear={selectValue}/>
                {/*To show the expense list*/}
                <ExpenseChart expenses={filteredArray}/>
                {renderExpensesList}
            </Card>
        </div>
    );
}

export default Expense;