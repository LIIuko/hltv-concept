import './App.css';
import {useEffect} from "react";
import axios from "axios";
import News from './components/News'
import RecentNews from "./components/RecentNews";
import TopTeams from "./components/TopTeams";
import PlayerOfTheWeek from './components/PlayerOfTheWeek'


function App() {

    useEffect(() =>{
         const fetchNews = async() => {
            const data =(await axios.get('https://hltv-api.vercel.app/api/results.json')).data;
            console.log(data);
        }
        fetchNews();
    }, [])

    return (
        <>
            <News></News>
            <RecentNews></RecentNews>
            <TopTeams></TopTeams>
            <PlayerOfTheWeek></PlayerOfTheWeek>
        </>
    );
}

export default App;
