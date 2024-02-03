import {useEffect, useState} from "react";
import axios from "axios";

import './App.css';
import News from './components/News'
import RecentNews from "./components/RecentNews";
import TopTeams from "./components/TopTeams";
import PlayerOfTheWeek from './components/PlayerOfTheWeek'


function App() {

    const [topTeams, setTopTeams] = useState([]);
    const [recentNews, setRecentNews] = useState([])


    useEffect(() => {
        const fetchInfo = async () => {
            const recentNews = await axios.get("https://e6f4ab0cb2784e60.mokky.dev/news")
            const topTeams = await axios.get("https://e6f4ab0cb2784e60.mokky.dev/topTeams")
            setRecentNews(recentNews.data)
            setTopTeams(topTeams.data)
        }
        fetchInfo();
    }, [])

    return (
        <>
            <News></News>
            <RecentNews recentNews={recentNews}></RecentNews>
            <TopTeams topTeams={topTeams}></TopTeams>
            <PlayerOfTheWeek></PlayerOfTheWeek>
        </>
    );
}

export default App;
