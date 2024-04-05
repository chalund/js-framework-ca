import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchData() {

            try {
                setIsLoading(true);
                setIsError(false);

                const response = await fetch(url);
                const json = await response.json();
                
                setData(json.data);
            
            } catch (error) {
                setIsError(true);
                throw new Error('Error fetching data');

            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return {
        data,
        isLoading,
        isError,
    };
}