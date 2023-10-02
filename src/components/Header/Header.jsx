import q from './Header.module.css';
import {faFacebookMessenger} from "@fortawesome/free-brands-svg-icons";
import {faBars, faBell, faUserTie} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from 'react';

const Header = () => {
    return (
        <header className={q.header} id='header'>
            <a href="#" className={q.brand}>
                M.S.
            </a>
            <div className={q.menuBtn}>
                <div className={q.navigation}>
                    <div className={q.navigationItems}>
                        <a href="#">Home</a>
                        <a href="#">Friends</a>
                        <a href="#">Reels</a>
                        <a href="#">Marketplace</a>
                        <a href="#">Groups</a>
                    </div>
                </div>
            </div>
            <div className={q.funProfile}>
                <div className={q.funItems}>
                    <a href="#"><FontAwesomeIcon icon={faBars}/></a>
                </div>
                <div className={q.funItems}>
                    <a href="#"><FontAwesomeIcon icon={faFacebookMessenger}/></a>
                </div>
                <div className={q.funItems}>
                    <a href="#"><FontAwesomeIcon icon={faBell}/></a>
                </div>
                <div className={q.funItems}>
                    <a href="#"><FontAwesomeIcon icon={faUserTie}/></a>
                </div>
            </div>
        </header>
    );
};

export default Header;