import React from 'react';
import classes from "./HeaderMatches.module.scss";

const HeaderMatches = (props) => {
    const matches = props.matches
    return (
        <div className={classes.container}>
            <ul>
                {matches.map(({event, maps, teams}) => (

                    <div key={event.name} className={classes.item__container}>
                        <li>
                            <div className={classes.title__container}>
                                <div className={classes.img__title}>
                                    <img
                                        src={event.logo}
                                        alt="Event"/>
                                </div>
                                <div className={classes.title}>
                                    {event.name}
                                </div>
                            </div>
                            <div className={classes.info__container}>
                                <div className={classes.img__team}>
                                    <img
                                        src={teams[0].logo}
                                        alt="Team1"/>
                                </div>
                                <div className={classes.info}>
                                    <p>
                                        12 : 10
                                    </p>
                                    <div>{maps.toUpperCase()}</div>
                                </div>
                                <div className={classes.img__team}>
                                    <img
                                        src={teams[1].logo}
                                        alt="Team2"/>
                                </div>
                            </div>
                        </li>
                    </div>
                ))
                }
            </ul>
        </div>

    );
};

export default HeaderMatches;