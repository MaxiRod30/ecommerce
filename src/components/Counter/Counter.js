import {useState} from 'react'

const Counter = () => {
     
    const [count , setCount] = useState(0)
    
    const increment = () =>{
        for (let index = 0; index < 5; index++) {
            setCount( prev =>prev + 1)
        }
       
    }
    const decrement = () =>{
        setCount( prev =>prev - 1)
    }

    return (
    <div>
        <h1>{count}</h1>
        <button onClick={decrement}>decrementar</button> 
        <button onClick={increment}>incrementar</button>
    </div>
    )

}
 
export default Counter