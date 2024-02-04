import React from 'react';
import HeaderMatches from "../components/HeaderMatches";
import Navbar from "../components/Navbar";
import News from "../components/News";
import RecentNews from "../components/RecentNews";
import TopTeams from "../components/TopTeams";
import PlayerOfTheWeek from "../components/PlayerOfTheWeek";
import Header from "../components/Header/Header";

const Home = ({recentNews, topTeams, matches}) => {
    return (
        <>
            <Header></Header>
            <HeaderMatches matches={matches}/>
            <Navbar></Navbar>
            <News></News>
            <RecentNews recentNews={recentNews}></RecentNews>
            <TopTeams topTeams={topTeams}></TopTeams>
            <PlayerOfTheWeek></PlayerOfTheWeek>
        </>
    );
};

export default Home;