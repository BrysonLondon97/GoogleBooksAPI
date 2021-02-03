import {useState, useEffect} from 'react';
import googleBooks from '../api/googleBooks';

export default () => {
    const [results, setResults] = useState({})
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        searchAPI('Harry Potter');
    }, [])

    const searchAPI = async (searchTerm) => {
        try{
            const response = (await googleBooks.get(searchTerm, {
                params: {
                    maxResults: 20
                }
            }));

            //console.log(response.data);
            setResults(response.data)

        } catch (error){
            setErrorMessage('Something went wrong')
        }
    }
    return [searchAPI, results, errorMessage]

    
}