import "./Chronometer.css"
import { useEffect , useState } from "react";


const Chronometer = (props) => {
    
    const [timeSeg , setTimeSeg] = useState(0)
    const [timeMin , setTimeMin] = useState(0)
    const [timeHora , setTimeHora] = useState(0)
  
    const [resetChronometer , setResetChronometer] = useState(0)
   
    let seg = 0;
    let min = 0;

    useEffect(() => {
        setTimeSeg(0)
        const intervaLID = setInterval(()=>{

                seg++
                setTimeSeg(prev => prev + 1)

                if((seg > 59) && (min < 59) ){
                    setTimeMin(prev => prev + 1)
                    min++
                }else if ((seg > 59) && (min > 59)){
                    setTimeMin(0)
                    setTimeHora(prev => prev + 1)
                }

        },1000)
        return () => {
            console.log("limpio")
            clearInterval(intervaLID)
        };
    }, [timeMin , resetChronometer]);

    

    const resetCronometro = () =>
    {
        setResetChronometer(prev => prev + 1)
        setTimeMin(0)
        setTimeHora(0)
    }


    return (
        <div>
            <h1 className ="titulo">{props.title}</h1>
            <br></br>
            <div className = "chronometer">
                <p>{timeHora}</p>
                <p>:</p>
                <p>{timeMin}</p>
                <p>:</p>
                <p>{timeSeg}</p>
            </div>
            <h1>{resetChronometer}</h1>
            <button onClick={resetCronometro}>Reset</button>

        </div>
    )
}
 
export default Chronometer