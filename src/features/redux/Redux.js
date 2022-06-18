import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SkeletonLoader from '../../comonents/skeleton/SkeletonLoader';
import { userAsync } from './ReduxSlice';
import './style.scss'

function Redux(props) {
    // other way u can fetch data using store
    const data = useSelector((state) => state.user.data)
    // console.log(data)
    //  const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const dispatch = useDispatch()

    // other way u can fetch data using store
    React.useEffect(() => {
        dispatch(userAsync())
        setTimeout(() => {
            dispatch(userAsync())
            setLoading(false)
        }, 5000)
    }, [dispatch])

    // React.useEffect(() => {
    //     dispatch(userAsync()).then((res) => {
    //         //  console.log(res.payload)
    //         // using settime out for checcking skeleton
    //         setTimeout(() => {
    //             setData(res.payload)
    //             setLoading(false)
    //         }, 5000)

    //     }, [])

    // }, [dispatch])


    return (
        <div style={{ maxWidth: "70%", margin: "0 auto" }}>
            <div className='reduxDiv'>
                <div className='row'>
                    {
                        loading
                            ?
                            (
                                <>
                                    {
                                        [...Array(3)].map((_, i) => {
                                            return <div className='col-md-6  offset-md-3 box' key={i}>
                                                <h2> <SkeletonLoader height="30px" width="300px" /></h2>
                                                <h3> <SkeletonLoader height="25px" width="270px" /></h3>
                                                <h3> <SkeletonLoader height="25px" width="240px" /></h3>
                                                <p> <SkeletonLoader height="20px" width="200px"/></p>
                                                <p> <SkeletonLoader height="20px" width="200px"/></p>
                                                <p> <SkeletonLoader height="20px" width="200px" /></p>
                                            </div>
                                        })
                                    }
                                </>
                            )
                            :
                            (

                                data?.map((ele, i) => {
                                    return <div className='col-md-6 offset-md-3 box' key={i}>
                                        <h2>{ele.name}</h2>
                                        <h3>{ele.email}</h3>
                                        <h3>"Address"</h3>
                                        <p>{ele.address.street}</p>
                                        <p>{ele.address.city}</p>
                                        <p>{ele.phone}</p>
                                    </div>

                                })
                            )

                    }
                </div>
            </div>
        </div>
    );
}

export default Redux;