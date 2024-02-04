import React from 'react';
import classes from './Header.module.scss';
import Input from "../Input";

const Header = () => {
    return (
        <header>
            <div className={classes.logo}>
                <h1>HLTV.ORG</h1>
            </div>
            <div className={classes.nav__container}>
                <Input></Input>
                <div className={classes.button}>
                    <img src="../../assets/images/profile.svg" alt="Profile"/>
                </div>
                <div className={classes.button}>colocol</div>
            </div>
        </header>
    );
};

export default Header;