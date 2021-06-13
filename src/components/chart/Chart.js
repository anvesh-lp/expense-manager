import './css/chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    //Get total values of months from props
    const dataValues = props.datapoints.map(datapoint => datapoint.value);
    const totalMaximum = Math.max(...dataValues);
    return (<div className="chart">
        {props.datapoints.map(datapoint => <ChartBar
            key={datapoint.label}
            value={datapoint.value}
            maxvalue={totalMaximum}
            label={datapoint.label}/>)}
    </div>);
}

export default Chart;