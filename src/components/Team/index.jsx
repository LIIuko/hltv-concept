import React from 'react';
import PlayersList from "../PlayersList";
import styles from "./Team.module.scss";

const Team = ({teams}) => {
    return (
        <ul>
            {teams.map((team, index) => (
                <li key={team.team} className={styles.team}>
                    <div className={styles.container}>
                        <div className={styles.team__info}>
                            <div className={styles.number}>
                                <h2>#{index + 1}</h2>
                            </div>
                            <div className={styles.name}>
                                <img src={team.image} alt="Team logo"/>
                                <h3>{team.team}</h3>
                                <span>({team.points} points)</span>
                            </div>
                        </div>
                        <div className={styles.players}>
                            <PlayersList players={team.players}/>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Team;