import React from "react";
import classes from "./Header.module.scss";
import Input from "../Input";
import profile from "../../assets/images/profile.svg";
import bell from "../../assets/images/bell.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <div className={classes.logo}>
                    <h1>HLTV.ORG</h1>
                </div>
            </Link>

            <div className={classes.nav__container}>
                <Input></Input>
                <div className={classes.button}>
                    <img src={profile} alt="Profile" />
                </div>
                <div className={classes.button}>
                    <img src={bell} alt="Bell" />
                </div>
            </div>
        </header>
    );
};

export default Header;
