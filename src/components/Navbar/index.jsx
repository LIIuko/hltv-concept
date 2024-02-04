import home from '../../assets/images/navbar/home.svg'
import matches from '../../assets/images/navbar/matches.svg'
import results from '../../assets/images/navbar/results.svg'
import events from '../../assets/images/navbar/events.svg'
import stats from '../../assets/images/navbar/stats.svg'
import galleries from '../../assets/images/navbar/galleries.svg'
import classes from "./Navbar.module.scss";
import React from "react";


const Navbar = () => {
    const navbar = [
        {img: home, title: 'Home'},
        {img: matches, title: 'Matches'},
        {img: results, title: 'Results'},
        {img: events, title: 'Events'},
        {img: stats, title: 'Stats'},
        {img: galleries, title: 'Galleries'},
    ]
    return (<nav className={classes.container}>
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
    </nav>);
}

export default Navbar;