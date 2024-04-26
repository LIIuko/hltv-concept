import React from 'react';
import styles from './PlayersList.module.scss';

const PlayersList = ( {players} ) => {
    console.log(players)
    return (
        <ul className={styles.players__list}>
            {players?.map(({image, country, nickname}) => (
                <li key={nickname} className={styles.player__item}>
                    <img className={styles.player__img} src={image} alt={nickname} />
                    <div className={styles.player__info}>
                        <img src={country.flag} alt={country.name}/>
                        <h4>{nickname}</h4>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default PlayersList;
