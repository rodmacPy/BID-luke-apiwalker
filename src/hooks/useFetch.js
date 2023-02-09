import { useEffect, useState } from "react"
import axios from 'axios'
export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })
    const [results, setResults] = useState('')

    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true,
            hasError: null
        })
        try {
            const resp = await axios.get(url);
            setResults(resp.data)

        } catch (error) {
            throw setState({
                data: null,
                isLoading: false,
                hasError: error
            })
        }


    }


    useEffect(() => {
        getFetch();
    }, [url])

    return {
        data: results,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}
