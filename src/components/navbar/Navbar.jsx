import React from 'react';
import classes from './Navbar.module.scss'
import navbar from './index';

const Navbar = () => {
    return (
        <nav className={classes.container}>
            <ul>
                {navbar.map(({img, title}) => (
                    <li className={classes.item} key={title}>
                        <div className={classes.img}>
                            <img src={img} alt=""/>
                        </div>
                        <div>
                            {title}
                        </div>
                    </li>
                ))}

            </ul>
        </nav>
    );
};

export default Navbar;