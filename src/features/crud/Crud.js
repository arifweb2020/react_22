import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap'

const getAllData = () => {
    const allData = localStorage.getItem("studentsList")
    if (allData) {
        return JSON.parse(allData)
    }
    else {
        return []
    }
}

function Crud(props) {
    const [data, setData] = useState(getAllData());
    const [name, setName] = useState("")
    const [course, setCourse] = useState("")
    const [city, setCity] = useState("")
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(null)
    const [query, setQuery] = useState("")
    const [page, setPage] = React.useState(0);



    const handleClose = () => {
        setShow(false);
        setName("")
        setCourse("")
        setCity("")
    }

    const handleShow = (id) => {
        let update = data.find((ele) => {
            return ele.name === id
        })
        //  console.log(update)
        setName(update.name)
        setCity(update.city)
        setCourse(update.course)
        setEdit(id)
        setShow(true);
    }

    const updateSubmission = (e) => {
        e.preventDefault();
        const updatedData = data.map((ele) => {
            // console.log(ele)
            if (ele.name === edit) {
                return { ...ele, name, city, course }
            }
            return ele
        })
        setData(updatedData)
        setShow(false);
        setName("")
        setCourse("")
        setCity("")
    }

    const handleSubmission = (e) => {
        e.preventDefault();
        const x = JSON.parse(localStorage.getItem("studentsList"))
        const y = x.find((ele) => ele.name === name)

        if (y) {
            alert("Name already taken")
            setName("")
            setCourse("")
            setCity("")
            return
        }
        let allCred = {
            name,
            course,
            city
        }
        setData([...data, allCred])
        setName("")
        setCourse("")
        setCity("")
    }

    useEffect(() => {
        localStorage.setItem("studentsList", JSON.stringify(data))
    }, [data])

    const delteData = (id) => {
        const newData = data.filter((value, index) => {
            return value.name !== id
        })
        setData(newData)
    }

    const pageData = React.useMemo(() => { //use useMemo to memorize the page
        return data.filter((ele) => ele.name.toLowerCase().includes(query)
            || ele.city.toLowerCase().includes(query) || ele.course.toLowerCase().includes(query)
        ).slice(page * 5, (page * 5) + 5)
    }, [data, page, query])



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

    const x = {

        name: "ARIFHUSSAIN Kalim SHAH"
    }

    const num = [20, 30, 15, 20, 90, 80, 15, 60, 90];

    const y = num.filter((val, i) => num.indexOf(val) === i)
    console.log(y)

    return (
        <div style={{ maxWidth: "70%", margin: "0 auto" }}>
            <h2>CRUD with Local Storage <span style={{ textTransform: "capitalize" }}>Hi, {x.name.split(" ")[1].toLowerCase()}</span> </h2>
            <p>{x.name.slice(2, 7)}</p>
            <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-md-4">
                    <form>
                        <div className="form-group">
                            <input type="text" required placeholder="Enter Name" value={name} className="form-control" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" required placeholder="Enter Course" value={course} className="form-control" onChange={(e) => setCourse(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" required placeholder="Enter City" value={city} className="form-control" onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-md btn-primary" onClick={handleSubmission}>Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <input type="text" onChange={(e) => setQuery(e.target.value)} /><br />
                    {
                        data.length > 0 ? <><table className='table table-stried'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Course</th>
                                    <th>City</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    pageData.map((ele, i) => {
                                        return <tr key={i}>
                                            <td>{ele.name}</td>
                                            <td>{ele.course}</td>
                                            <td>{ele.city}</td>
                                            <td ><span style={{ cursor: "pointer", color: "red" }}
                                                onClick={() => delteData(ele.name)}
                                            >delete </span>
                                                <span
                                                    style={{ cursor: "pointer", color: "grey" }}
                                                    onClick={() => handleShow(ele.name)}>Edit</span></td>
                                        </tr>
                                    })
                                }
                            </tbody>

                        </table>
                            <button className='btn btn-md btn-danger' onClick={() => setData([])}>Delete All</button>
                        </>
                            : <h2>No data found</h2>
                    }
                    {data.length}
                    <button onClick={prevPage}
                        className="btn btn-sm btn-primary mr-4"
                        disabled={page === 0}
                    >Prev</button>
                    <button onClick={nextPage}
                        disabled={(page * 5) + 5 >= Math.ceil(data.length)}
                        className="btn btn-sm btn-primary">Next</button>

                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <form>
                            <div className="form-group">
                                <input type="text" required placeholder="Enter Name" value={name} className="form-control" onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <input type="text" required placeholder="Enter Course" value={course} className="form-control" onChange={(e) => setCourse(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <input type="text" required placeholder="Enter City" value={city} className="form-control" onChange={(e) => setCity(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-md btn-primary" onClick={updateSubmission}>Update</button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Crud;