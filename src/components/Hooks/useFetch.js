import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    useEffect(() => {
      async function fetchBooks(){
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error (`HTTP error! status ${response.status}`);
          }
          const json = await response.json();
          setData(json.items || []);
        } catch(err){
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
      fetchBooks();
    },[url])
  return { data , loading, error }

}
