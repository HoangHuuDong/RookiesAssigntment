import React, { Fragment } from "react";
const Header = () =>{
    const url = 'https://localhost:7107/';
    return (
    <Fragment> 
        <div className="grid">
            <nav className="header__navbar">
                <ul className="header__navbar-list">
                    <li onClick={()=>window.location.href = "/"} className="header__navbar-item">Rookies Store
                    </li>
                    <li onClick={()=>window.location.href = url} className="header__navbar-item">
                        Customer Site
                    </li>
                    <li onClick={()=>window.location.href = "/customer"} className="header__navbar-item">
                        Customer Manager
                    </li>
                </ul>
                <ul className="header__navbar-list">
                    <li className="header__navbar-item header__navbar-user">
                        <img src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/267904423_3072838436303106_8402354931433032745_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gQKdSzTZAMMAX8nkJe5&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBmer_J-Hw3HiInL9srHVcp_FI3MimR1oZSjPihq9blog&oe=636707C7" alt="" className="header__navbar-user-img"/>
                        <span className="header__navbar-user-name">Huu Dong</span>

                        <ul className="header__navbar-user-menu">
                            <li className="header__navbar-user-item">
                                <p>My account</p>
                            </li>
                            <li className="header__navbar-user-item">
                                <p>History</p>
                            </li>
                            <li className="header__navbar-user-item">
                                <p>Log Out</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </Fragment>
    )
}

export default Header;