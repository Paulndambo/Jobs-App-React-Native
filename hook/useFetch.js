import {useState, useEffect} from "react";
import axios from "axios";
//import { RAPID_API_KEY } from ".env";

const rapidApiKey = "1543f672famsh26de0be26ebcb69p170f5ajsn93e94ff39b32";

const useFetch = (endpoint, query) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    //const axios = require('axios');

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': "0ca636493dmsh64a05d2c6f67558p187791jsn6560a9ba31f0",
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query},
    };

    
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            //console.log("Response", response.data)
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert("There is an error!")
        } finally {
            setIsLoading(false);
        }
        
    }

    useEffect(() => {
        fetchData();
    }, [])

    
    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }


    return { data, isLoading, error, refetch }

}

export default useFetch;