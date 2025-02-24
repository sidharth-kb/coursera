import { useState, useEffect } from 'react';

const UseFetch = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(dat => {
        setData(dat);
      }
    )
    .catch(e => console.error(e));
  }, []);

  return [data];
}

export default UseFetch;
