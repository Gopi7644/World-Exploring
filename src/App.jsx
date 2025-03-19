import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './AppLayout/Layout'
import About from './Pages/About'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Country from './Pages/Country'
import ErrorPage from './Pages/ErrorPage'
import CountryDetails from './Pages/CountryDetails'

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/country",
                    element: <Country />
                },
                {
                    path: "/country/:id",
                    element: <CountryDetails />
                },
            ]
        }
    ])

    return <RouterProvider router={router} />
}

export default App