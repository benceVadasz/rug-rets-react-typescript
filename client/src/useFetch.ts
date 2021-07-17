import {useState, useEffect} from "react";
import axios from "axios";

const useFetch = (url?: string | null | undefined) => {

    const [data, setData] = useState<any>()


    const fetchData = async (url: string| null | undefined) => {
        if (url) {

            const {data} = await axios.get(url)
            setData(data)
        }
    }

    useEffect(() => {
        fetchData(url)
    }, [url])

    return {data, fetchData}
}

export default useFetch;