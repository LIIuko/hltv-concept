import PlayersList from "../PlayersList";
import { useEffect, useState } from "react";

import styles from "./Team.module.scss";

const Team = ({ teams }) => {
    const [openedId, setOpenedId] = useState(null);

    const handleTeamClick = (teamId) => {
        setOpenedId(openedId === teamId ? null : teamId);
    };

    return (
        <ul>
            {teams.map((team, index) => (
                <li
                    key={team.team}
                    className={styles.container}
                    onClick={() => handleTeamClick(team.team)}>
                    <div className={styles.number}>
                        <h2>#{index + 1}</h2>
                    </div>
                    <div className={styles.name}>
                        <img src={team.image} alt="Team logo" />
                        <h3>{team.team}</h3>
                        <span>({team.points} points)</span>
                    </div>
                    <div className={styles.players__list}>
                        {openedId === team.team && (
                            <PlayersList players={team.players} />
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Team;
