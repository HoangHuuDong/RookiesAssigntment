import React, { Fragment } from "react";

const Header = () =>{
    return (
    <Fragment> 
        <div className="grid">
            <nav className="header__navbar">
                <ul className="header__navbar-list">
                    <li className="header__navbar-item header__navbar-item--separate">Rookies Store
                    </li>
                    <li className="header__navbar-item header__navbar-item--has-qr">Download App
                        <div className="header__qr">
                            <img src="./assets/img/qr_code.png" alt="QR code" className="header__qr-img"/>
                            <div className="header__qr-apps">
                                <a href="" className="header__qr-link-left">
                                    <img src="./assets/img/app_store.png" alt="App Store" className="header__qr-download-img"/>
                                </a>
                                <a href="" className="header__qr-link-right">
                                    <img src="./assets/img/gg_play.png" alt="Goggle Play" className="header__qr-download-img"/>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className="header__navbar-list">
                    <li className="header__navbar-item header__navbar-item--strong header__navbar-item--separate">Register</li>
                    <li className="header__navbar-item header__navbar-item--strong">Login</li>
                </ul>
            </nav>
        </div>
    </Fragment>
    )
}

export default Header;