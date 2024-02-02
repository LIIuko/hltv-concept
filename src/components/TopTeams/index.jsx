import React from 'react';
import styles from './TopTeams.module.scss'

const TopTeams = () => {
    const teams = [
        {
            team: 'Natus Vincere',
            image: 'https://img-cdn.hltv.org/teamlogo/9iMirAi7ArBLNU8p3kqUTZ.svg?ixlib=java-2.1.0&s=4dd8635be16122656093ae9884675d0c',
            country: 'https://www.hltv.org/img/static/flags/30x20/RU.gif',
            points: 937
        },
        {
            team: 'Gambit',
            image: 'https://img-cdn.hltv.org/teamlogo/pNV-lVdpvYZIkDwHdEXXg-.svg?ixlib=java-2.1.0&s=8b557b5b4d283208976340ef1bc44c76',
            country: 'https://www.hltv.org/img/static/flags/30x20/RU.gif',
            points: 673
        },
        {
            team: 'G2',
            image: 'https://img-cdn.hltv.org/teamlogo/zFLwAELOD15BjJSDMMNBWQ.png?ixlib=java-2.1.0&w=100&s=88aeba1564bc27de69fb2302e47e1a7c',
            country: 'https://www.hltv.org/img/static/flags/30x20/EU.gif',
            points: 660
        },
        {
            team: 'Heroic',
            image: 'https://img-cdn.hltv.org/teamlogo/6LVaK1MVX06kO1ChAq22v6.svg?ixlib=java-2.1.0&s=1ad0be7366aab3ef6825996762c3e615',
            country: 'https://www.hltv.org/img/static/flags/30x20/DK.gif',
            points: 593
        },
        {
            team: 'Astralis',
            image: 'https://img-cdn.hltv.org/teamlogo/9bgXHp-oh1oaXr7F0mTGmd.svg?ixlib=java-2.1.0&s=f567161ab183001be33948b98c4b2067',
            country: 'https://www.hltv.org/img/static/flags/30x20/DK.gif',
            points: 522
        }
    ]
    return (
        <ul className={styles.team__list}>
            {teams.map(({team, image, country, points}) => (
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