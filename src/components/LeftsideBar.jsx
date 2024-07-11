
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'

const LeftsideBar = ({doggleFunction}) => {
    const location = useLocation()

    const nav_data_1 = [
        { link: '/', icon: 'icon-grid-square-lite', name: 'overview' },
        { link: '/schedule', icon: 'icon-calendar-lite', name: 'schedule' },
        { link: '/ongoing-recruitment', icon: 'icon-scan-circle-lite', name: 'ongoing recruitment' },
        { link: '/analytics', icon: 'icon-chart-bar-lite', name: 'analytics' },
        { link: '/reports', icon: 'icon-clipboard-list-lite', name: 'reports' },
    ];

    const nav_data_2 = [
        { link: '/vacancies', icon: 'icon-building-tree-lite', name: 'vacancies' },
        { link: '/candidates', icon: 'icon-user-viewfinder-lite', name: 'candidates' },
        { link: '/interviews', icon: 'icon-chat-dots-notification-lite', name: 'interviews' },
        { link: '/offers', icon: 'icon-envelope-heart-lite', name: 'offers' },
    ];

    const nav_data_3 = [
        { link: '/settings', icon: 'icon-settings-lite', name: 'settings' },
        { link: '/help-support', icon: 'icon-microphone-lite', name: 'help & support' },
    ];


    return (
        <nav className="sidenav">
            {/* logo */}
            <div className="logo xyc">
                <img src={logo} alt="Logo" />
                <div className='doggle xe yc'>
                <i className="icon-angle-left-circle-fill" onClick={()=>doggleFunction()}></i>
                </div>
            </div>
            <div>
                  <ul className="main_menu_list ">
                <h6>MAIN MENU</h6>
                {
                    nav_data_1.map((el, i) => {
                        return <a href={el.link} key={i} className={location.pathname == el.link ? 'active' : ''}>
                            <i className={el.icon}></i>{el.name}
                        </a>
                    })
                }
            </ul>
            <ul className="main_menu_list req_menu">
                <h6>REQUIREMENT</h6>
                {
                    nav_data_2.map((el, i) => {
                        return <a href={el.link} key={i} className={location.pathname == el.link ? 'active' : ''}>
                            <i className={el.icon}></i>{el.name}
                        </a>
                    })
                }
            </ul>
            <ul className="main_menu_list acc_menu">
                {
                    nav_data_3.map((el, i) => {
                        return <a href={el.link} key={i} className={location.pathname == el.link ? 'active' : ''}>
                            <i className={el.icon}></i>{el.name}
                        </a>
                    })
                }
            </ul>
            </div>
          
        </nav>
    );
};

export default LeftsideBar;
