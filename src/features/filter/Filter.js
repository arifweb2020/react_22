import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NFT__DATA, fake_data } from './../../dummy-data/data';
import { Link } from 'react-router-dom';

function Filter(props) {

    const [data, setData] = React.useState(NFT__DATA);
    const [mydata, setMyData] = React.useState(fake_data);
    const [fakeData, setFakeData] = React.useState([]);
    const [products, setProducts] = React.useState(fakeData)

    React.useEffect(() => {
        const getData = async () => {
            const res = await fetch('https://fakestoreapi.com/products')
            const res1 = await res.json()
            // console.log("res " + JSON.stringify(res1))
            setFakeData(res1)
            setProducts(res1)
        }
        getData()
    }, [])

    // filter common category name
    const prod = fakeData.filter((val, pos, data) => {
        return data.map((ele) => ele.category).indexOf(val.category) === pos
    })


    // filter live api category
    const catHandler = (e) => {

        const filterCat = e.target.value;
        if(filterCat === "All Categories"){
            return setProducts(fakeData)
        } 

        const mydata = fakeData.filter((val, i) => val.category === filterCat)
        setProducts(mydata)

    }

    // filter common category name
    const category = fake_data.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj.category).indexOf(obj.category) === pos;
    })

    let a23 = [10, 20, 30, 10, 50, 20, 80, 25]
    // filter common number which is 10,20
    let x09 = a23.filter(function (value, index) {
        return a23.indexOf(value) === index;
    });

    console.log(x09)

    // filter by color
    const color = fake_data.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj.color).indexOf(obj.color) === pos;
    })



    // ====== SORTING DATA BY HIGH, MID, LOW RATE =========
    const handleSort = (e) => {
        const filterValue = e.target.value;

        if (filterValue === "high") {
            const filterData = NFT__DATA.filter((item) => item.currentBid >= 6);

            setData(filterData);
        }

        if (filterValue === "mid") {
            const filterData = NFT__DATA.filter(
                (item) => item.currentBid >= 5.5 && item.currentBid < 6
            );

            setData(filterData);
        }

        if (filterValue === "low") {
            const filterData = NFT__DATA.filter(
                (item) => item.currentBid >= 4.89 && item.currentBid < 5.5
            );

            setData(filterData);
        }
    };

    const categoryHandler = (e) => {
        const filterVal = e.target.value;
        console.log("filterVal " + filterVal)
        if (filterVal === "All Categories") {
            return setMyData(fake_data)
        }
        const filterData = fake_data.filter((item) => item.category === filterVal);
        console.log(filterData)
        setMyData(filterData);
    }

    const colorHandler = (e) => {
        const filterVal = e.target.value;
        console.log("filterVal " + filterVal)
        if (filterVal === "Select Color") {
            return setMyData(fake_data)
        }
        const filterData = fake_data.filter((item) => item.color === filterVal);
        console.log(filterData)
        setMyData(filterData);
    }

    // checkbox filter

    const filterData = (val) => {
        const colorFinder = fake_data.filter((item) => item.color === val);
        setMyData(colorFinder)
    }

    return (
        <>
            <section>
                <Container className='mt-5'>
                    <Row>
                        <h3><Link to="/dp_filter">Dependent Filter</Link></h3>
                        <Col lg="12" className="mb-5 mt-3">
                            <div className="market__product__filter d-flex align-items-center justify-content-between">


                                <div className="filter__right">
                                    <select onChange={handleSort}>
                                        <option>Sort By</option>
                                        <option value="high">High Rate</option>
                                        <option value="mid">Mid Rate</option>
                                        <option value="low">Low Rate</option>
                                    </select>
                                </div>
                            </div>
                        </Col>

                        {data?.map((item) => (
                            <Col lg="2" md="2" sm="3" className="mb-4" key={item.id}>
                                <div>
                                    <h4>{item.currentBid}</h4>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>

                <div className='container  mb-5'>
                    <h1>Filter Fn</h1>
                    <div className='row mt-4'>
                        <div className='col-md-3'>
                            <h5>Category</h5>
                            <div className='form-group'>
                                <select className='form-control' onChange={categoryHandler}>
                                    <option>All Categories</option>
                                    {
                                        category.map((ele) => {
                                            return <option value={ele.category}>{ele.category}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <h5>Select Color</h5>
                            <div className='form-group'>
                                <select className='form-control' onChange={colorHandler}>
                                    <option>Select Color</option>
                                    {
                                        color.map((ele) => {
                                            return <option value={ele.color}>{ele.color}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <h5>Select Color</h5>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <span><input type="checkbox" onClick={() => filterData("red")} /> red</span>
                                <span><input type="checkbox" onClick={() => filterData("white")} /> white </span>
                                <span><input type="checkbox" onClick={() => filterData("green")} /> green </span>
                                <span><input type="checkbox" onClick={() => filterData("blue")} /> blue </span>
                                <span><input type="checkbox" onClick={() => filterData("black")} /> black </span>
                                <span><input type="checkbox" onClick={() => filterData("grey")} /> grey </span>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        {
                            mydata.map((ele, i) => {
                                return <div className='col-md-4 mt-3' key={i}>
                                    <div className='card shadow-lg p-3'>
                                        <h3>Category - {ele.category}</h3>
                                        <p>Price - {ele.price}</p>
                                        <p>Color - {ele.color}</p>
                                        <p>{ele.describe}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className='row mt-4'>
                        <h2>MAIN API</h2>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-md-3'>
                            <h5>Category</h5>
                            <div className='form-group'>
                                <select className='form-control' onChange={catHandler}>
                                    <option>All Categories</option>
                                    {
                                        prod.map((ele) => {
                                            return <option value={ele.category}>{ele.category}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        {
                            products?.map((ele, i) => {
                                return <div className='col-md-4 mt-3' key={i}>
                                    <div className='card shadow-lg p-3'>
                                        <h3>Category - {ele.category}</h3>
                                        <p>Price - {ele.price}</p>

                                    </div>
                                </div>
                            })
                        }
                    </div>



                </div>
            </section>
        </>
    );
};
export default Filter;