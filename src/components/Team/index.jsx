import styles from "./Team.module.scss";
import PlayersList from "../PlayersList";
import { useState } from "react";

const Team = ({ teams }) => {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <>
            {teams.map((item, index) => (
                <div className={styles.container}>
                    <h2>#{index + 1}</h2>
                    <img src={item.image} alt="Team logo" />
                    <h3>{item.team}</h3>
                    <span>{item.points} points</span>
                    <PlayersList players={item.players} isOpened={isOpened} />
                </div>
            ))}
        </>
    );
};

export default Team;
