import React from "react";
import logo from "../../assets/logo.png"
import user from "../../assets/user.png"
import arrow from "../../assets/arrow.png"
import notif from "../../assets/notifications.png"
import share from "../../assets/share.png"
import medium from "../../assets/medium.png"
import btn from "../../assets/btn.png"

function Header() {
    return (
        <div className='header'>
            <div className="header__menu block-menu">
                <div className='block-menu__logo'>
                    <img src={logo} alt="logo"/>
                </div>
                <div className='block-menu__profile profile'>
                    <div className="profile__user user">
                        <div className="user__title"> Arthur Wood</div>
                        <img className="user__photo" src={user} alt="user"/>
                        <img className="user__arrow" src={arrow} alt="arrow"/>
                    </div>
                    <div className="profile__icons icons-block">
                        <img className="icons-block__icon" src={notif} alt="icon"/>
                        <img className="icons-block__icon" src={share} alt="icon"/>
                        <img className="icons-block__icon" src={medium} alt="icon"/>
                    </div>
                </div>
            </div>
            <nav className="header__nav">
                <ul className="navigation">
                    <li className="navigation__item"><a className="link" href="#"> feed </a></li>
                    <li className="navigation__item"><a className="link" href="#"> explore </a></li>
                    <li className="navigation__item"><a className="link" href="#"> discussions </a></li>
                </ul>
            </nav>
            <div className="header__btn">
                <img className="btn" src={btn} alt="btn"/>
            </div>
        </div>
    );
}

export default Header;
