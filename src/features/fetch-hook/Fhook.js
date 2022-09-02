import React from 'react';
import useFetch from 'react-fetch-hook';

function Fhook(props) {
    const { isLoading, data , error  } = useFetch("https://jsonplaceholder.typicode.com/users");
    // const l = data.then(res=> console.log(res));
    return error ? (
        <div>{error.status}</div>
    ) :
    isLoading ? (
        <div>Loading...</div>
    ) : (
        <>
            {
                data?.map((ele) => {
                    return <p>{ele.name}</p>
                })
            }
        </>
    );
}

export default Fhook;