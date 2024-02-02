import styles from './PlayerOfTheWeek.module.scss'

const PlayerOfTheWeek = () => {
    const player = {
        nickname: 'donkGOD',
        img: 'https://img-cdn.hltv.org/playerbodyshot/sAqrpGeO7o3rl7yNYfTMdQ.png?ixlib=java-2.1.0&w=400&s=f184d2aa868271276ebd20903b63e122',
        country: 'https://www.hltv.org/img/static/flags/30x20/RU.gif',
        name: 'Danil Kryshkovets',
        rating: 1.51,
        dpr: '0.54',
        impact: 1.64,
        adr: 93.6
    }
    return (
        <div className={styles.player__container}>

            <div className={styles.image__container}>

                <img src={player.img}/>
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.player__info}>
                <h3>PLAYER OF THE WEEK</h3>
                <span>{player.nickname}</span>
                <div className={styles.player__name}>
                    <img src={player.country}/>
                    <span>{player.name}</span>
                </div>
                <div>
                    <li className={styles.statistics}>
                        <ul>
                            <h5>Rating 2.0</h5>
                            <span>{player.rating}</span>
                        </ul>
                        <ul className={styles.adr}>
                            <h5>ADR</h5>
                            <span>{player.adr}</span>
                        </ul>
                        <ul>
                            <h5>Impact</h5>
                            <span>{player.impact}</span>
                        </ul>
                        <ul className={styles.adr}>
                            <h5>DPR</h5>
                            <span>{player.dpr}</span>
                        </ul>
                    </li>
                </div>

            </div>
        </div>
    );
}

export default PlayerOfTheWeek;