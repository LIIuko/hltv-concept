import {useEffect, useState} from "react";

import './App.css';
import Home from "./pages/Home";

import HltvService from "./API/HltvService";
import {useFetching} from "./hooks/useFetch";


function App() {

    const [topTeams, setTopTeams] = useState([])
    const [recentNews, setRecentNews] = useState([])
    const [matches, setMatches] = useState([])

    const [fetchingNews, isLoadingNews, errorNews] = useFetching(async () => {
        const response = await HltvService.getNews();
        setRecentNews(response.data);
    });

    const [fetchingTopTeams, isLoadingTopTeams, errorTopTeams] = useFetching(async () => {
        const response = await HltvService.getTopTeams();
        setTopTeams(response.data);
    });

    const [fetchingMatches, isLoadingMatches, errorMatches] = useFetching(async () => {
        const response = await HltvService.getMatches();
        setMatches(response.data);
    });


    useEffect(() => {
        fetchingNews();
        fetchingTopTeams();
        fetchingMatches();
    }, [])

    return (
        <>
            <Home recentNews={recentNews} topTeams={topTeams} matches={matches}></Home>
        </>
    );
}

export default App;
