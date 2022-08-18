import React, { useState, useEffect } from 'react';

function NextTable(props) {
    const [data, setData] = React.useState([]);
    const [page, setPage] = React.useState(0); //create page state
    const [searchTxtx, setSearchTxt] = useState("")

    React.useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const res1 = await res.json()
            setData(res1)
        }
        getData()
    }, [])

    // let x = []; //normally would use var here
    // let i = 1;  //normally would use var here
    // while (x.push(i++) < data.length/10) {
    //     console.log(x)
    // }

    // this function is used for converting total length into array
    // eslint-disable-next-line no-sequences
    const aa = Array(data.length / 10).fill().reduce(arr => (arr.push(arr.length), arr), [])
    // console.log(aa)

    // this function is used for custom pagination
    const pageData = React.useMemo(() => { //use useMemo to memorize the page
        return data.filter((ele) => ele.title.toLowerCase().includes(searchTxtx)).slice(page * 10, (page * 10) + 10)
    }, [data, page, searchTxtx])

    const nextPage = () => {
        // u can put validation like that
        // console.log(" data " + data.length)
        // if((page * 10) + 10 === Math.ceil(data.length)){
        //     return alert("casdds")
        // }
        setPage(prev => prev + 1) //next page
    }

    const prevPage = () => {
        setPage(prev => prev > 0 ? prev - 1 : prev) //prev page - need to add condition here so it doesn't go below 0
    }

    const perPage = (e) => {
        const x = Math.ceil((e.target.value * 10) * 0.1)
        console.log("value " + x)

        if (e.target.value === 0) {
            setPage(0) //next page
        }
        else {
            setPage(x)
        }

    }

    return (
        <div className='container mt-5 mb-5'>
            {page}
            <input type="text" value={searchTxtx}
             placeholder="Search "
              onChange={(e) => {
                setSearchTxt(e.target.value)
                setPage(0);
                
            } 
              }
              />
            <select onChange={perPage} className="ml-2">
                {
                    aa.map((ele) => {
                        // console.log("ele " + ele)
                        return <option value={ele}>{ele + 1}</option>
                    })
                }
            </select>
            <h4>{data.length}-{(page * 10) + 10}</h4>
            {
                pageData.map((ele) => {
                    return <p>{ele.title}</p>
                })
            }
            <button onClick={prevPage}
                className="btn btn-sm btn-primary mr-4"
                disabled={page === 0}
            >Prev</button>
            <button onClick={nextPage}
                disabled={(page * 10) + 10 === Math.ceil(data.length)}
                className="btn btn-sm btn-primary">Next</button>

        </div>
    );
}

export default NextTable;