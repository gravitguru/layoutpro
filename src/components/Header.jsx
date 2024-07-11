import avator from '../assets/avator.png'
import { useState } from 'react';

const Header = () => {
    const [isShow,setIsShow]= useState(false)
    return (
        <div className="header_menu yc">
            <h1>Dashboard</h1>
            <div className='search yc'>
                <i className="icon-search-lite"></i>
                <input type="text" placeholder="Search..." />
            </div>
            <div className='yc notification'>
                <i className="icon-bell-notification-lite"></i>
                <i className="icon-chat-dots-notification-lite"></i>
            </div>
            <div className='avatorimg yc'>
                <img src={avator} alt="" />
                <div>
                    <h1>Alex holland</h1>
                    <p>Requirement specialistic </p>
                </div>
                <i className="icon-angle-down-small-lite" onClick={()=>setIsShow(!isShow)}></i>
            </div>
            {isShow && <div className='dropmenu xe'>
 <ul className="">
     <li><a href="#">Home</a></li>
     <li><a href="#">About</a></li>
     <li><a href="#">Services</a></li>
     <li><a href="#">Contact</a></li>
 </ul>
</div>
            }
           
        </div>
    );
};

export default Header;
