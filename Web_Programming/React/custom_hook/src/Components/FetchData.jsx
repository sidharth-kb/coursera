import React from 'react';
import UseFetch from './UseFetch.jsx'

const FetchData = () => {
 const [data] = UseFetch('https://api.npoint.io/9045c260b1565daa9e15');
 console.log(data);
  return (
    <>
      <ul>
        <h1>Use Fetch Custom Hook</h1>
        {
          data.map(e => {
            return(
              <>
                <h2>{ e.name }</h2>
                <img src={e.image} alt=""></img>
              </>
            )
          })
        }
      </ul>
    </>
  )
}

export default FetchData;
