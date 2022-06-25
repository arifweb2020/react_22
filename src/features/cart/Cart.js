import React from 'react';

function Cart(props) {
    const getAllLocalStorageData = () => {
        const allData = localStorage.getItem("shoping-item")
        if (allData) {
            return JSON.parse(allData)
        }
        else {
            return []
        }
    }
    const [items, setItems] = React.useState(getAllLocalStorageData())
    //  const items = JSON.parse(localStorage.getItem("shoping-item"))
    const handleRemove = (prod) => {
        const newItem = items.filter((val) => val.id !== prod)
        setItems(newItem)
    }

 
    return (
        <div className='container'>
            <h1>Cart Item</h1>
            <div className="row" style={{ background: "#grey" }}>

                <div className='col-md-12 mb-5'>
                    {items.map((product) => (
                        <div key={product.id} className="cartCard" style={{ marginTop: "50px" }}>
                            <img src={product.image} alt="" width="100" height="100" />
                            <h5>{product.title}</h5>
                            <h5>{product.price}</h5>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleRemove(product.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}

export default Cart;