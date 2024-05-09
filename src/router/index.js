import { createBrowserRouter } from "react-router-dom";
import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import Nosotros from '../pages/Nosotros';
import Notas from '../pages/Notas';
import Nota from '../pages/Nota'
import LayoutPublic from '../layout/LayoutPublic';
import Proyectos from '../pages/Proyectos';
import Sumate from '../pages/Sumate';
import { getNotasFetch } from "../api/getNotasFetch";
import { getNotaIndivFetch } from "../api/getNotaIndivFetch";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic/>,
        errorElement: <Error404/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/nosotros",
                element: <Nosotros/>
            },
            {
                path: "/notas",
                element: <Notas/>,
                loader: getNotasFetch
            },
            {
                path: "/notas/nota/:id",
                element: <Nota/>,
                loader: getNotaIndivFetch
            },
            {
                path: "/proyectos",
                element: <Proyectos/>
            },
            {
                path: "/sumate",
                element: <Sumate/>
            }
        ]
    }
])