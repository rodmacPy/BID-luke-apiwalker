import { useOutletContext, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

export const Buscador = () => {
    const [saludo,saludo2] = useOutletContext()
    const { buscar, id } = useParams()
    const { data, hasError } = useFetch(`https://swapi.dev/api/${buscar}/${id}`)
    console.log(saludo)
    console.log(saludo2)
    return (
        <div className='container'>
            {data && hasError? <p>Intente de nuevo con otra id</p>
                : Object.keys(data).map(
                    (key, idx) => (
                        <p key={idx}><span>{key}</span>: {data[key]} </p>
                    ))
            }
        </div>
    )
}
