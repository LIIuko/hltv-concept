import styles from "./Team.module.scss";
import PlayersList from "../PlayersList";
import { useState } from "react";

const Team = ({ teams }) => {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <ul>
            {teams.map(({ image, team, points, title, players }, index) => (
                <li
                    className={styles.container}
                    onClick={() => setIsOpened(!isOpened)}>
                    <div className={styles.number}>
                        <h2>#{index + 1}</h2>
                    </div>
                    <div className={styles.name}>
                        <img src={image} alt="Team logo" />
                        <h3>{team}</h3>
                        <span>({points} points)</span>
                    </div>
                    <div className={styles.players__list}>
                        <PlayersList
                            key={title}
                            players={players}
                            isOpened={isOpened}
                        />
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Team;
