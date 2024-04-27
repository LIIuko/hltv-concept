import "./App.css";
import Home from "./pages/Home/Home";

import HltvService from "./API/HltvService";
import { useFetching } from "./hooks/useFetch";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import MainLayout from "./Layout/MainLayout";
import TopTeamsPage from "./pages/TopTeams/TopTeamsPage"
import {Suspense, useEffect, useState} from "react";


function App() {
    const [topTeams, setTopTeams] = useState([]);
    const [recentNews, setRecentNews] = useState([]);
    const [matches, setMatches] = useState([]);

    const [fetchingNews, isLoadingNews, errorNews] = useFetching(async () => {
        const response = await HltvService.getNews();
        setRecentNews(response.data);
    });

    const [fetchingTopTeams, isLoadingTopTeams, errorTopTeams] = useFetching(
        async () => {
            const response = await HltvService.getTopTeams();
            setTopTeams(response.data);
        }
    );

    const [fetchingMatches, isLoadingMatches, errorMatches] = useFetching(
        async () => {
            const response = await HltvService.getMatches();
            setMatches(response.data);
        }
    );

    useEffect(() => {
        fetchingNews();
        fetchingTopTeams();
        fetchingMatches();
    }, []);

    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route
                    path=""
                    element={
                        <Home
                            recentNews={recentNews}
                            topTeams={topTeams}
                            matches={matches}
                        />
                    }
                />
                <Route
                    path="top-teams" element={<TopTeamsPage topTeams={topTeams}/>}>
                </Route>
                <Route
                    path="*"
                    element={
                        <Suspense fallback={<div>Загрузка...</div>}>
                            <NotFound />
                        </Suspense>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;
