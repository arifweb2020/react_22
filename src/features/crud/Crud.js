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
    const [data, setData] = useState(getAllData())
    const [name, setName] = useState("")
    const [course, setCourse] = useState("")
    const [city, setCity] = useState("")
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(null)

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

    return (
        <div style={{ maxWidth: "70%", margin: "0 auto" }}>
            <h2>CRUD with Local Storage</h2>
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
                                    data.map((ele, i) => {
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