import React from 'react';
import classes from './Header.module.scss';

const Header = () => {
    return (
        <header>
            <div className={classes.logo}>
                <h1>HLTV.ORG</h1>
            </div>
            <div className={classes.nav__container}>
                <input type="text"/>
                <div className={classes.button}>profile</div>
                <div className={classes.button}>colocol</div>
            </div>
        </header>
    );
};

export default Header;