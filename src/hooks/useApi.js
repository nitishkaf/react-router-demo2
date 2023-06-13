import { useState, useEffect } from 'react';

export const useApi = (endpoint) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
        const res = await response.json();
        setData(res);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [endpoint])

  return data;
}
