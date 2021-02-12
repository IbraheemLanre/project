import {React,useState} from 'react'


const Counter=()=>{
    // State: a counter value
    const[counter, setCounter] = useState(0)

    // Action:
    const increment =()=>{
        setCounter(prevCounter => prevCounter+1)
    }

    // View:
    return(
        <div>
            Value:{counter}<button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter