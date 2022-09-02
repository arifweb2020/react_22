import React from 'react';
import { useQuery } from 'react-query'
function QueryHook(props) {

    // const myUrl = () =>{
    //     return axios.get('https://jsonplaceholder.typicode.com/users')
    // }
    // const { isLoading, data, isError,error } = useQuery('repoData', myUrl)

    const { isLoading, data, isError, error } = useQuery('repoData', () =>
        fetch('https://jsonplaceholder.typicode.com/todos').then(res =>
            res.json()
        )
    )
    
    return isError ? (<div>{error?.message}</div>) :
        isLoading ? (<div>Loading...</div>) : (
            <>
                <h1>Calling React Query Hook</h1>
                {
                    data?.slice(0,10)?.map((ele) => {
                        return <p>{ele?.title}</p>
                    })
                }
            </>
        );
}

export default QueryHook;