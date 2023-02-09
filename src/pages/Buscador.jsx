import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

export const Buscador = () => {
    const { buscar, id } = useParams()
    const { data, hasError } = useFetch(`https://swapi.dev/api/${buscar}/${id}`)

    return (
        <div className='container'>
            {hasError && hasError? <img src='https://i.imgur.com/xqrZ92B.jpg' alt="Obi-Wan Kenobi" />
                : Object.keys(data).map(
                    (key, idx) => (
                        <p key={idx}><span>{key}</span>: {data[key]} </p>
                    ))
            }
            
        </div>
    )
}
