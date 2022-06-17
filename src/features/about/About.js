import React from 'react';
import { useSelector } from 'react-redux';
import SkeletonLoader from '../../comonents/skeleton/SkeletonLoader';

function About(props) {
    const counter = useSelector((state) => state.counter.value);
    const [data, setData] = React.useState([]);
    const [loading, setLaoding] = React.useState(true)

    React.useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const res1 = await res.json()
            setData(res1)
            setLaoding(false)
        }
        getData()
    }, [])


    return (
        <>
        
        {/*
        <h1>Correct wat to use skeleton</h1>
        <div className="post">
            <div className="left-col">
                <div className="avatar">
                    {loading && (
                        <SkeletonLoader
                            circle
                            height="100%"
                            containerClassName="avatar-SkeletonLoader"
                        />
                    )}
                    <img
                        src="smile.svg"
                        alt="A user avatar"
                        style={{ display: loading ? 'none' : undefined }}
                    />
                </div>
                <div className="user-name">
                    {loading ? <SkeletonLoader width={70} /> : 'John Doe'}
                </div>
            </div>
            <div className="right-col">
                <h3>{loading ? <SkeletonLoader /> : 'Use React Loading SkeletonLoader!'}</h3>
                <p className="mb-0">
                    {loading ? (
                        <SkeletonLoader count={3} />
                    ) : (
                        <>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum nec justo feugiat, auctor nunc ac, volutpat arcu.
                            Suspendisse faucibus aliquam ante, sit amet iaculis dolor
                            posuere et. In ut placerat leo.
                        </>
                    )}
                </p>
            </div>
        </div> */}


        <div style={{ maxWidth: "80%", margin: "0 auto" }}>
            <h1>{counter}</h1>

            {
                loading
                    ?
                    (
                        <>
                            {/* <SkeletonLoaderLoader width="40px" height="40px" circle="circle" /> */}
                            <SkeletonLoader width="290px" height="30px" count="10" />
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
        </>
    );
}

export default About;