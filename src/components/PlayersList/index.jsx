import { useEffect } from "react";
import styles from "./PlayersList.module.scss";

const PlayersList = ({ players, isOpened }) => {
    return (
        <>
            {players?.map(({ image, country, nickname }) =>
                isOpened ? (
                    <div className={styles.drawer}>
                        <img src={image} alt="Player" />
                        <div className={styles.name}>
                            <img src={country.flag} alt="Flag" />
                            <h4>{nickname}</h4>
                        </div>
                    </div>
                ) : (
                    <div className={styles.nickname}>
                        <h4>• {nickname}</h4>
                    </div>
                )
            )}
        </>
    );
};

export default PlayersList;
