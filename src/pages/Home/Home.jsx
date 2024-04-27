import React from "react";
import HeaderMatches from "../../components/HeaderMatches";
import News from "../../components/News";
import RecentNews from "../../components/RecentNews";
import TopTeams from "../../components/TopTeams";
import PlayerOfTheWeek from "../../components/PlayerOfTheWeek";
import styles from "./Home.module.scss";
import Team from "../../components/Team";
import {Link} from "react-router-dom";

const Home = ({ recentNews, topTeams, matches }) => {
    console.log(topTeams);
    return (
        <div>
            <div className={styles.header__container}>
                <div className={styles.content__container}>
                    <HeaderMatches matches={matches} />
                    <div className={styles.top__block}>
                        <div className={styles.news__container}>
                            <News></News>
                            <RecentNews recentNews={recentNews}></RecentNews>
                        </div>
                        <div className={styles.players__container}>
                            <PlayerOfTheWeek></PlayerOfTheWeek>
                            <div className={styles.topteams__header}>
                                <h3>Top teams</h3>
                                <div className={styles.button__container}>
                                    <button>
                                        <Link to="/top-teams">
                                            See all
                                        </Link>
                                    </button>

                                </div>
                            </div>
                            <TopTeams topTeams={topTeams}></TopTeams>
                        </div>
                    </div>
                    <Team teams={topTeams}></Team>
                </div>
            </div>
        </div>
    );
};

export default Home;
