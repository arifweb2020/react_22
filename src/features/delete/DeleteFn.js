import React from 'react';
import SpinLoader from '../../comonents/spin-loader/SpinLoader';

function DeleteFn(props) {
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


    const delteUser = (x) => {
        console.log("id checking " + x)
        const newData = data.filter((item) => item.id !== x)
        console.log("new data " + JSON.stringify(newData))
        setData(newData)
    }


    return loading ? (
        <SpinLoader />
    ) : (
        <div>
            {
                data.map((ele, i) => {
                    return <div key={i}>
                        {
                            ele.id === 1 ? <p style={{ color: "red" }}>{ele.name} - <button onClick={() => delteUser(ele.id)}>Delete</button></p> : <p key={i}>{ele.name} - <button onClick={() => delteUser(ele.id)}>Delete</button></p>
                        }

                    </div>
                })
            }
        </div>
    );
        

}

export default DeleteFn;