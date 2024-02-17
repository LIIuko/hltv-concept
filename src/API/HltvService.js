import axios from "axios";

export default class HltvService{
    static async getNews () {
        return await axios.get("https://e6f4ab0cb2784e60.mokky.dev/news");
    }

    static async getTopTeams () {
        return await axios.get("https://e6f4ab0cb2784e60.mokky.dev/topTeams");
    }

    static async getMatches (sneaker) {
        return await axios.get("https://e6f4ab0cb2784e60.mokky.dev/matches");
    }
}