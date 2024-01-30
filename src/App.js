import './App.css';
import {useEffect} from "react";
import axios from "axios";

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
        </>
    );
}

export default App;
