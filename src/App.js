import Expense from "./components/expenses/Expense";
import "./App.css";
import NewExpense from "./components/newExpense/NewExpense";
import {useState} from "react";

const DUMMY_DATA = [
    {
        id: 1,
        title: "carInsurence",
        amount: 2000,
        item: 'car',
        date: new Date(2020, 5, 22)
    },
    {
        id: 2,
        title: "Educational loan",
        amount: 2000,
        item: 'loan',
        date: new Date(2020, 6, 21)
    },
    {
        id: 2,
        title: "Educational loan",
        amount: 2000,
        item: 'loan',
        date: new Date(2019, 6, 21)
    }
];

function App() {

    const [expenses, setExpenses] = useState(DUMMY_DATA);
    //To save new expense and reload the components
    const saveNewExpense = (newExpense) => {
        //adding new expense to previous expenses
        setExpenses(previousSate => {
            return [newExpense, ...previousSate];
        });
        console.log("length of data is ");
        console.log(expenses.length);
    }

    return (
        <div>
            <NewExpense onNewExpense={saveNewExpense}/>
            <Expense
                items={expenses}/>
        </div>
    );
}

export default App;
