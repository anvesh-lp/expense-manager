import Chart from "../chart/Chart";

const ExpenseChart = (props) => {

    const chartProperties = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'July', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sept', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ];
    for (const expense of props.expenses) {
        const month = expense.date.getMonth(); //Starting at 0(january==0)
        chartProperties[month].value += expense.amount;
    }

    return (<Chart datapoints={chartProperties}/>);
}
export default ExpenseChart;