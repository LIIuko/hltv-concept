import './App.css';
import {useEffect} from "react";
import axios from "axios";
import News from './components/News'
import RecentNews from "./components/RecentNews";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

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
            <Header/>
            <Navbar/>
            <News></News>
            <RecentNews></RecentNews>
        </>
    );
}

export default App;
