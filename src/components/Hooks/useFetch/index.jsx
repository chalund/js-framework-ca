import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            console.log('going to fetch the data')
            try {
                setIsLoading(true);
                setIsError(false);

                const response = await fetch(url);
                const json = await response.json();
                setData(json.data);
                console.log(json)
            } catch (error) {
                console.log(error)
                setIsError(true);
                throw new Error('Error fetching data');
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    return {
        data,
        isLoading,
        isError,
    };
}