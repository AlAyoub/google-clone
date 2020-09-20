import { useState, useEffect } from 'react'
import API_KEY from './keys';

const CONTEXT_KEY = "e7a6d983d3ec90539";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {

            const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`;

            fetch(
                url
            )
                .then(response => response.json())
                .then(result => {
                    setData(result)
                })
                .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
        }
        fetchData();
    }, [term])

    return { data }
}

export default useGoogleSearch
