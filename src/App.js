import {useEffect, useState} from "react";
import axios from "axios";

import './App.css';
import News from './components/News'
import RecentNews from "./components/RecentNews";
import TopTeams from "./components/TopTeams";
import PlayerOfTheWeek from './components/PlayerOfTheWeek'
import Home from "./pages/Home";
import Header from "./components/Header/Header";


function App() {

    const [topTeams, setTopTeams] = useState([])
    const [recentNews, setRecentNews] = useState([])
    const [matches, setMatches] = useState([])


    useEffect(() => {
        const fetchInfo = async () => {
            const recentNews = await axios.get("https://e6f4ab0cb2784e60.mokky.dev/news")
            const topTeams = await axios.get("https://e6f4ab0cb2784e60.mokky.dev/topTeams")
            const matches = await axios.get("https://e6f4ab0cb2784e60.mokky.dev/matches")
            setRecentNews(recentNews.data)
            setTopTeams(topTeams.data)
            setMatches(matches.data)
        }
        fetchInfo();
    }, [])

    return (
        <>
            <Home recentNews={recentNews} topTeams={topTeams} matches={matches}></Home>
        </>
    );
}

export default App;
