import { useState, useEffect } from "react"

export const useAsync= (asyncFuntion, dependencies = [] ) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    
    useEffect(() => {

        setLoading(true)

        asyncFuntion()
            .then(data =>{
                setData(data)
            })
            .catch(error =>{
                setError(error)
            })
            .finally(()=>{
                setLoading(false)
            })

    }, dependencies)

    return {
        data,
        error,
        loading
    }

}