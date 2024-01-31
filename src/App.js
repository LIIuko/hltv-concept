import styles from './App.module.scss';
import {useEffect} from "react";
import axios from "axios";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";

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
            <div className={styles.container}>
                <Navbar/>
                <Home/>
            </div>
        </>
    );
}

export default App;
