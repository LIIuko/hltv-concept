import React from 'react';
import styles from './TopTeams.module.scss'

const TopTeams = (props) => {
    const topTeams = props.topTeams
    return (
        <ul className={styles.team__list}>
            {topTeams.map(({team, image, country, points}) => (
                <li>
                    <img src={image} className={styles.team__logo} alt="Team Logo" />
                    <div className={styles.team__info}>
                        <div className={styles.team__info__header}>
                            <img src={country} alt="Team Flag" className={styles.team__flag}/>
                            <span className={styles.team__name}>{team}</span>
                        </div>
                        <span className={styles.team__points}>{points} Points</span>
                    </div>

                </li>
                ))}
        </ul>
    );
}

export default TopTeams;