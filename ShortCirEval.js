import React, { useState } from 'react';

function ShortCirEval() {

    const [item,setItem]=useState(" ")
    return (
        <div>
            <h1>{item || "Santosh"}</h1>
            <h1>{item && "Kumar"}</h1>
        </div>
    );
}

export default ShortCirEval;