import { useState } from "react";
import LeftsideBar from "../../components/LeftsideBar";
import LeftsideBarIcons from "../../components/LeftSideBarIcons";
import Header from "../../components/Header";
import CardSection from './../../components/CardSection';
import MoreTaskCard from './../../components/MoreTaskCard';


const Overview = () => {
    const [doggle, setDoggle] = useState(true)
    const doggleFunction = () => {
        setDoggle(!doggle)
    }
    return (
        <div className="dashboard_layout">
            <div className="dashboard_layout_1">
                {doggle ? <LeftsideBar doggleFunction={doggleFunction} /> : <LeftsideBarIcons doggleFunction={doggleFunction} />}
            </div>
            <div className="dashboard_layout_2 rightside_container">
                <Header />
                <CardSection />
                <MoreTaskCard />
            </div>
        </div>
    );
};

export default Overview;
