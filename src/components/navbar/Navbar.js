import React from 'react';
import { NotificationsNone, Language, Settings } from '@material-ui/icons'
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbarWrapper">
                <div className="navbarLeft">
                    <span className="logo">AD ADMIN</span>
                </div>
                <div className="navbarRight">
                    <div className="navbarIcons">
                        <NotificationsNone />
                        <span className="navbarIconBadge">2</span>
                    </div>
                    <div className="navbarIcons">
                        <Language />
                        <span className="navbarIconBadge">2</span>
                    </div>
                    <div className="navbarIcons">
                        <Settings />
                    </div>
                    <img src="" alt="" className="avatar" />
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
