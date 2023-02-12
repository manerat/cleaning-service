import { createBrowserRouter } from "react-router-dom";
import React from "react";

const Layout = React.lazy(() => import('../layout/index'))
const HomePage = React.lazy(() => import('../pages/Home'))
const PaymentPage = React.lazy(() => import('../pages/Payment'))

const router = createBrowserRouter([
    {
        path : '/app',
        children : [
            {
                path : '/app',
                element : <HomePage/>
            },
            {
                path : '/app/payment',
                element : <PaymentPage/>
            }
        ]
    }
])

export default router