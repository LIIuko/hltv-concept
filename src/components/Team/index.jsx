import styles from './Team.module.scss'
import {useState} from "react";

const Team = (props) => {
    const teams = props.teams
    return (
        <>
        {
            teams.map(({team, image, country, points}, index) => (
                <div className={styles.container}>
                    <h2>{index + 1}</h2>
                    <img src={image} alt="Team logo"/>
                    <h3>{team}</h3>
                    <span>({points} points)</span>
                    <div>
                    </div>
                </div>
            ))
        }
        </>

    );
}

export default Team;