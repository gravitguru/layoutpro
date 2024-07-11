import chart1 from '../assets/chart/Layout 2.png'
import chart2 from '../assets/chart/Layout 4.png'
import chart3 from '../assets/chart/Layout 3.png'
const CardSection = () => {
    const CardData = [
        {
            title: ' application',
            count: '1,543',
            rating: '12.67%',
        },
        {
            title: ' shortlisted',
            count: '843',
            rating: '8.67%',
        },
        {
            title: ' hired',
            count: '443',
            rating: '5.67%',
        },
        {
            title: ' rejected',
            count: '468',
            rating: '2.67%',
        },
    ]
    const chartDatas = [
        {
            color: '',
            title: 'ENGINERRING'
        },
        {
            color: '',
            title: 'Marketing'
        },
        {
            color: '',
            title: 'Sales'
        },
        {
            color: '',
            title: 'customer support'
        },
        {
            color: '',
            title: 'Finance'
        },
    ]
    return (
        <div className="cards">
            <div className="lhs">
                <div className="cards yc">
                    {
                        CardData.map((item, index) => (
                            <div key={index} className="itms">
                                <div className="title">
                                    <h1>{item.title}</h1>
                                    <i className="icon-more-horizontal-lite"></i>
                                </div>
                                <div className="count yc">
                                    <p>{item.count}</p>
                                    <p className="yc"> <i className="icon-line-chart-dots-circle-reg"></i>{item.rating}</p>
                                </div>

                            </div>
                        ))
                    }
                </div>
                <div className='yc chartcard'>
                    <div className='lhs'>
                        <div className="title">
                            <h1>Application</h1>
                            <i className="icon-more-horizontal-lite"></i>
                        </div>
                        <div className='img xyc'>
                            <img src={chart2} alt="" />

                        </div>
                    </div>
                    <div className='rhs'>
                        <div className="title">
                            <h1>Resource</h1>
                            <i className="icon-more-horizontal-lite"></i>
                        </div>
                        <div className='chartdetails'>
                            <div className='xyc charts'>
                                <img src={chart3} alt="" />
                                <h1>525</h1>
                                <p>TOTAL APPLICATION</p>
                            </div>

                            <div className='listed'>
                                {
                                    chartDatas.map((el, i) => {
                                        return <p className='' key={i}><i className="icon-checkbox-square-fill-fill"></i> {el.title}</p>
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="rhs">
                <div className="title">
                    <h1>Application Resource</h1>
                    <i className="icon-more-horizontal-lite"></i>
                </div>
                <div className='xyc '>
                    <img src={chart1} alt="" />

                </div>
                <div className='counts xyc'>
                    <h1>30%</h1>
                    <p>your sales performance increase by 30% better compare to last month</p>
                    <a href="" className="btn">Details</a>
                </div>
            </div>
        </div>
    );
};

export default CardSection;
