import React, { useState, useEffect } from 'react';

const useAxios = (url, intialState) => {
    const [response, setResponse] = useState(intialState);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const json = res.json;
                setResponse(json)
            } catch (error) {
                throw new error
            }
        }
        fetchData();
    }, [url])

    return [...intialState, {response}]
}

export default useAxios