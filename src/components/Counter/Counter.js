import {useState} from 'react'

const Counter = ( {title , min , max}) => {
     
    const [count , setCount] = useState(0)
    const[msg , setMessage]=useState("")

    const increment = () =>{
        if(count < max){ 
            setMessage("")
            setCount( count + 1)
        }
        else{
            setMessage(`No puede comprar max de ${max} ${title}`)
        }
    }
    const decrement = () =>{
        if(count > min){ 
            setMessage("")
            setCount( count - 1) 
        }
        else{
            setMessage(`No puede comprar menos de ${min} ${title}`)
        }
    }

    return (
    <div>
        <h1>{title}</h1>
        <br></br>
        <h1>{count}</h1>
        <button onClick={decrement}>decrementar</button> 
        <button onClick={increment}>incrementar</button>
        {msg !== '' && <p>{msg}</p>}
    </div>
    )

}
 
export default Counter