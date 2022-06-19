import React from 'react';

function Box({text}) {
    // if(text === null || "") {
    //     throw new Error ("message nust be string")
    // }

    // to find error boundry
    if(typeof(text)!== 'string' || !text){
        throw new Error ("message nust be string")
    }
    return (
        <div>
            <h1>{text}</h1>
        </div>
    );
}

export default Box;