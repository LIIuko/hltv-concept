import React from 'react';
import classes from "./HeaderMatches.module.scss";

const MatchInfo = () => {
    return (
        <div className={classes.item__container}>
            <div className={classes.title__container}>
                <div className={classes.img__title}>
                    <img
                        src="https://img-cdn.hltv.org/eventlogo/nYADQoBBHeOXRjBW1kFOra.png?ixlib=java-2.1.0&w=50&s=cdec2e890642716f603d275d582433eb"
                        alt=""/>
                </div>
                <div className={classes.title}>
                    ESL Impact League Season 2 South America
                </div>
            </div>
            <div className={classes.info__container}>
                <div className={classes.img__team}>
                    <img
                        src="https://img-cdn.hltv.org/teamlogo/m7hO-NJreq77xXGQDJJxKo.png?ixlib=java-2.1.0&w=50&s=13c7e48d98fa8fcb344c0c43618448e8"
                        alt=""/>
                </div>
                <div className={classes.info}>
                    <div>
                        12 : 10
                    </div>
                    <div>
                        BO5
                    </div>
                </div>
                <div className={classes.img__team}>
                    <img
                        src="https://img-cdn.hltv.org/teamlogo/m7hO-NJreq77xXGQDJJxKo.png?ixlib=java-2.1.0&w=50&s=13c7e48d98fa8fcb344c0c43618448e8"
                        alt=""/>
                </div>
            </div>
        </div>
    );
};

export default MatchInfo;