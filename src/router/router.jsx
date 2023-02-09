import { createBrowserRouter } from 'react-router-dom'
import { Home , Buscador} from '../pages/'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children:[
            {
                path: '/:buscar/:id',
                element: <Buscador />
            }
        ]
    }
])
