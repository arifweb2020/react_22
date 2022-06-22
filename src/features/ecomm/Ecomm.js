import React from 'react';
import SkeletonLoader from '../../comonents/skeleton/SkeletonLoader';


function Ecomm(props) {
    const [data, setData] = React.useState([]);
    const [filterData, setFilterData] = React.useState(data);
    const [loading, setLaoding] = React.useState(true)
    const [selected, setSelcted] = React.useState("")

    React.useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://fakestoreapi.com/products")
            // const res1 = await res.json()
            const res1 = await res.clone().json()
            const res2 = await res.json()
            console.log(res1)
            setData(res1)
            setFilterData(res2)
            setLaoding(false)
        }
        getData()
    }, [])

    const filterProducts = (prod) => {
        //setLaoding(true)
        // console.log(prod)
        const prodData = data.filter(val => val.category === prod)
        //  const selection = data.find(val => val.category === prod)
        // console.log(selection.category + prod)
        setFilterData(prodData)
        setSelcted(prod)
        setLaoding(false)

    }

    console.log("selected " + selected)

    return (
        <div className='container mt-4'>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button type="button" className={filterData ? "btn btn-primary mr-2" : "btn btn-danger mr-2"} onClick={() => setFilterData(data)}>All</button>
                <button type="button" className={selected === "men's clothing" ? "btn btn-primary mr-2" : "btn btn-danger mr-2"} onClick={() => filterProducts("men's clothing")}>men's clothing</button>
                <button type="button" className={selected === "women's clothing" ? "btn btn-primary mr-2" : "btn btn-danger mr-2"} onClick={() => filterProducts("women's clothing")}>women's clothing</button>
                <button type="button" className={selected === "jewelery" ? "btn btn-primary mr-2" : "btn btn-danger mr-2"} onClick={() => filterProducts("jewelery")}>Jewellry</button>
                <button type="button" className={selected === "electronics" ? "btn btn-primary mr-2" : "btn btn-danger mr-2"} onClick={() => filterProducts("electronics")}>Electronics</button>
            </div>
            <div className='row'>
                {
                    loading ? (
                        <>
                            {
                                [...Array(12)].map((_, i) => {
                                    return <div className='col-md-4 mt-4' key={i}>
                                        <div className="card h-100 text-center p-4" >
                                            <SkeletonLoader height="250px" />
                                            <div className="card-body">
                                                <h4 className="card-title mb-0"><SkeletonLoader /></h4>
                                                <p className="card-text"><SkeletonLoader /></p>

                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                        </>
                    ) : (
                        filterData?.map((ele, i) => {
                            return <div className='col-md-4 mt-4 ' key={i}>
                                <div className="card h-100 text-center p-4" >
                                    <img src={ele.image} alt="img" height="250px" />
                                    <div className="card-body">
                                        <h4 className="card-title mb-0">{ele.category}</h4>
                                        <p className="card-text">{ele.title}</p>

                                    </div>
                                </div>
                            </div>
                        })
                    )

                }

            </div>
        </div>
    );
}

export default Ecomm;