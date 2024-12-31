import BmiCal from "./BmiCal";
import FoodCal from "./FoodCalCnt/FoodCal";

const CalTrack = () => {
    return (
        <div>
            <p>calories count</p>
            <BmiCal/>
            <FoodCal/>
        </div>
    );
};

export default CalTrack;