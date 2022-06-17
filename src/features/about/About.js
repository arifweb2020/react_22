import React from 'react';
import { useSelector } from 'react-redux';
import SkeletonLoader from '../../comonents/skeleton/SkeletonLoader';

function About(props) {
    const counter = useSelector((state) => state.counter.value);
    const [data, setData] = React.useState([]);
    const [loading, setLaoding] = React.useState(false)

    React.useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const res1 = await res.json()
            setData(res1)
            setLaoding(true)
        }
        getData()
    }, [])


    return (
        <div style={{ maxWidth: "80%", margin: "0 auto" }}>
            <h1>{counter}</h1>
           
            {
                loading
                ?
                (
                    <>
                    <SkeletonLoader width="30px" height="30px" circle="circle"/>
                      <SkeletonLoader width="290px" height="30px" count="10"/>
                       
                    </>
                )
                :
                (
                data.map((ele, i) => {
                    return <div key={i}>
                        <h4>{ele.name}  </h4>
                    </div>
                })
                )
            }
        </div>
    );
}

export default About;