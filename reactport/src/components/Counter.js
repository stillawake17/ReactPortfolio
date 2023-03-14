import React from "react";
import {useState} from 'react';


function Counter() {
const [count, setCount] = useState(0);

const increase = () => setCount(count + 1);
const decrease = () => setCount(count && count - 1);


return (
<>
<h2>Count: {count} </h2>

<button onClick={increase}>Increase</button>
<button onClick={decrease}>Decrease</button>

<p>another output of count : {count}</p>
</>

)

}

export default Counter;