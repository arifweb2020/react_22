import React from 'react';
import './style.scss'

function Dark(props) {
    
    const getData = () => {
        return JSON.parse(localStorage.getItem("theme")) || false
    }
    //  const [dark, setDark] = React.useState(false);
    const [dark, setDark] = React.useState(getData());

    // React.useEffect(() => {
    //     const d = JSON.parse(localStorage.getItem("theme"))
    //     if(d !== null) setDark(d)
    // }, [])

    React.useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(dark))
    }, [dark])

    return (
        <div className={dark ? "MainC darkC" : "MainC"} >
            <div className='container mt-4'>
                <h1 style={dark ? { color: "#fff" } : { color: "black" }}>Toggle light to dark theme color</h1>
                <label class="switch">
                    <input type="checkbox" onChange={() => setDark(!dark)} checked={dark} />
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
    );
}

export default Dark;