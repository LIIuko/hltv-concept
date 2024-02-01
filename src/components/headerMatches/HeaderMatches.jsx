import React from 'react';
import classes from './HeaderMatches.module.scss'
import MatchInfo from "./MatchInfo";

const HeaderMatches = () => {
    return (
        <div className={classes.container}>
            <MatchInfo/>
            <MatchInfo/>
            <MatchInfo/>
            <MatchInfo/>
            <MatchInfo/>
        </div>
    );
};

export default HeaderMatches;