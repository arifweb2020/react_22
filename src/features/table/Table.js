import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import TableComp from '../../comonents/table-componet/TableComp';
import { useHistory } from 'react-router-dom'

function Table(props) {
    const [data, setData] = useState([])
    const [query, setQuery] = useState("")
    const [pageNumber, setPageNumber] = React.useState(0);
    const productPerPage = 10;
    const [pageCount, setPageCount] = useState(0)
    const history = useHistory()

    // https://www.youtube.com/watch?v=rgY1oPNVgwU
    // https://www.youtube.com/watch?v=xRBE4iKX0yw&t=2020s
    //https://www.youtube.com/watch?v=xRBE4iKX0yw

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/albums")
            const res1 = await res.json()
            setData(res1)
            setPageCount(Math.ceil(res1?.length / productPerPage))
        }
        if (query.length === 0 || query.length > 2) {
            getData()
        }
    }, [query])

    const keys = ["title", "id", "userId"]
    const pageNo = pageNumber + 1;
    const search = (mydata) => {

        const visitedPage = pageNumber * productPerPage;
        return mydata.filter((item) =>
            //item.title.toString().toLowerCase().includes(query) || item.id.toString().toLowerCase().includes(query) || item.userId.toString().toLowerCase().includes(query)
            keys.some((key) => item[key].toString().toLowerCase().includes(query))
        ).slice(visitedPage, visitedPage + productPerPage)
    }

    const handlePageClick = ({ selected }) => {
        // const selectedPage = e.selected;
        setPageNumber(selected);
    };



    return (
        <div className='container mt-4'>
            <h1>Table Filter <span onClick={() => history.push('/react-table')} style={{ cursor: 'pointer', textDecoration: 'underline', fontSize: '17px' }}>React Table</span></h1>
            <p>Page {pageNo} of {Math.ceil(data.length / 10)}</p>
            <p>
                <select value={pageNumber}
                    onChange={handlePageClick}
                >
                    {[5, 10, 15, 20, 25].map((ele) => {
                        return <option key={ele}>{ele}</option>
                    })}
                </select></p>
            <div className='row'>
                <div className='col-md-4'>
                    <input type="text"
                        className='form-control'
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
                <div className='col-md-12 mt-3'>
                    {/* {
                        data.filter((ele)=>ele.title.toLowerCase().includes(query)).slice(0,10).map((ele) => {
                            return <p>{ele.title}</p>
                        })
                    } */}
                    <TableComp list={search(data)} />
                </div>

            </div>
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                //  breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </div>
    );
}

export default Table;