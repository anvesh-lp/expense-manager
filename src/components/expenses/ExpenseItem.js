import './css/ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {useState} from "react";


function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    const handleClick = () => {
        setTitle("Updated");
        console.log("button Clicked");
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate
                date={props.date}>
            </ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </Card>);

}


export default ExpenseItem;