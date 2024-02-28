import styles from "./PlayersList.module.scss";

const PlayersList = ({ players, isOpened }) => {
    return (
        <div className={styles.container}>
            {players.map((item) => {
                console.log(item);
                return isOpened ? (
                    <div>
                        <img src={item.image} alt="Player" />
                        <div className={styles.name}>
                            <img src={item.country.flag} alt="Flag" />
                            <h4>{item.nickname}</h4>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className={styles.name}>
                            <h4>{item.nickname}</h4>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PlayersList;
