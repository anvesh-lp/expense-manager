import Expense from "./components/expenses/Expense";
import "./App.css";
import NewExpense from "./components/newExpense/NewExpense";

function App() {

    const data = [
        {
            title: "carInsurence",
            amount: 1000,
            item: 'car',
            date: new Date(1998, 5, 22)
        },
        {
            title: "Educational loan",
            amount: 20000,
            item: 'loan',
            date: new Date(1988, 6, 21)
        }];

    return (
        <div>
            <NewExpense/>
            <Expense
                items={data}>
            </Expense>
        </div>
    );
}

export default App;
