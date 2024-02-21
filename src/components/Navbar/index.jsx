import {ReactComponent as Home} from '../../assets/images/navbar/home.svg'
import {ReactComponent as Matches} from '../../assets/images/navbar/matches.svg'
import {ReactComponent as Results} from '../../assets/images/navbar/results.svg'
import {ReactComponent as Events} from '../../assets/images/navbar/events.svg'
import {ReactComponent as Stats} from '../../assets/images/navbar/stats.svg'
import {ReactComponent as Galleries} from '../../assets/images/navbar/galleries.svg'
import classes from "./Navbar.module.scss";
import React from "react";

const Navbar = () => {

    const navbar = [
        {img: <Home/>, title: 'Home'},
        {img: <Matches/>, title: 'Matches'},
        {img: <Events/>, title: 'Events'},
        {img: <Stats/>, title: 'Stats'},
        {img: <Galleries/>, title: 'Galleries'},
    ]


    return (<nav className={classes.container}>
        <ul>
            {navbar.map(({img, title}) => (
                <li className={classes.item} key={title}>
                    <div className={classes.img}>
                        {img}
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