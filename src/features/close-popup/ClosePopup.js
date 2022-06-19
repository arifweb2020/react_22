import React from 'react';
import './style.scss'

function ClosePopup(props) {
  const [open,setClose]=React.useState(true)
    const closeFn = ()=>{
        setClose(false)   
    }
    React.useEffect(()=>{
     const data= localStorage.getItem("popup")
     if (data !== null) setClose(JSON.parse(data))
    },[])

    React.useEffect(()=>{
        localStorage.setItem("popup",JSON.stringify(open))
    },[open])


    return (
        <div className='closePopup'>
            <h1>Local Storage Close Popup</h1>
            
            {
                open ? <div className='innerDiv'>
                <button onClick={closeFn} >Close</button>
                <h1>welcome 2 the possible</h1>
                <p>A Flexible Layout must have a parent element with the display property set to flex.</p>
            </div> : <button onClick={()=>localStorage.removeItem("popup")}>Remove item from localStorage</button>
            }
            
        </div>
    );
}

export default ClosePopup;