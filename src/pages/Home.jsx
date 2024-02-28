import React from "react";
import HeaderMatches from "../components/HeaderMatches";
import Navbar from "../components/Navbar";
import News from "../components/News";
import RecentNews from "../components/RecentNews";
import TopTeams from "../components/TopTeams";
import PlayerOfTheWeek from "../components/PlayerOfTheWeek";
import Header from "../components/Header/Header";
import styles from "./Home.module.scss";
import Team from "../components/Team";

const Home = ({ recentNews, topTeams, matches }) => {
    console.log(topTeams);
    return (
        <div>
            <Header></Header>
            <div className={styles.header__container}>
                <Navbar></Navbar>
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
                                    <button>See all</button>
                                    <div
                                        className={styles.arrow}
                                        style={{
                                            width: "10px",
                                            height: "10px",
                                        }}></div>
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
