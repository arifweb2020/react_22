import React from 'react';
import { fake_data } from './../../dummy-data/data';

function DpFilter(props) {

    const [data, setData] = React.useState(fake_data);
    const [filterdData, setFilterData] = React.useState([]);
    console.log("fdd " + JSON.stringify(filterdData));
    const [colorData, setColorData] = React.useState(filterdData);
    console.log("color " + JSON.stringify(colorData));
    // first find price array
    const maxData = data.map(ele => ele.price)

    // find maxprice data
    const maxPrice = data.find((ele) => ele.price === Math.max(...maxData))
    //  console.log("maxPrice " + JSON.stringify(maxPrice))

    // filter common category name
    const category = fake_data.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj.category).indexOf(obj.category) === pos;
    })

    // filter common color name
    const colorList = filterdData.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj.color).indexOf(obj.color) === pos;
    })


    const categoryHandler = (e) => {
        const filterVal = e.target.value;
        if (filterVal === "All Categories") {
            return setData(fake_data) || setFilterData([])
        }

        const filterData = fake_data.filter((item) => item.category === filterVal);
        // console.log("filterData " + JSON.stringify(filterData))

        setData(filterData);
        setFilterData(filterData)
    }

    const colorHandler = (e) => {
        const filterVal = e.target.value;
        if (filterVal === "Select Colors") {
            return setData(filterdData)
        }
        const colorData = filterdData.filter((item) => item.color === filterVal);
        console.log("coloData " + JSON.stringify(colorData))
        setData(colorData);
        //setColorData(colorData);
    }

    return (
        <div className='container mt-4 mb-5'>
            <h3>Dependent Filter</h3>
            <div className='row'>
                <div className='col-md-12'>
                    <p>Max price is {Math.max(...maxData)}</p>
                    <div className='col-md-4 mt-3'>
                        <div className='card shadow-lg p-3'>
                            <h3>Category - {maxPrice.category}</h3>
                            <p>Price - {maxPrice.price}</p>
                            <p>Color - {maxPrice.color}</p>
                            <p>{maxPrice.describe}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mt-4'>
                <div className='col-md-3'>
                    <h5>Category</h5>
                    <div className='form-group'>
                        <select className='form-control' onChange={categoryHandler}>
                            <option>All Categories</option>
                            {
                                category.map((ele, i) => {
                                    return <option key={i.id} value={ele.category}>{ele.category}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className='col-md-3'>
                    <h5>Colors</h5>
                    <div className='form-group'>
                        <select className='form-control' onChange={colorHandler}>
                            <option>Select Colors</option>
                            {
                                colorList.map((ele, i) => {
                                    return <option key={i.id} value={ele.color}>{ele.color}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>

            <div className='row'>
                {
                    data.map((ele, i) => {
                        return <div className='col-md-4 mt-3' key={i.id}>
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
        </div>
    );
}

export default DpFilter;