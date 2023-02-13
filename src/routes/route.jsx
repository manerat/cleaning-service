import { createBrowserRouter } from "react-router-dom";
import React from "react";

const Layout = React.lazy(() => import('../layout/index'))
const HomePage = React.lazy(() => import('../pages/Home'))
const PaymentPage = React.lazy(() => import('../pages/Payment'))
const SearchPage = React.lazy(() => import('../pages/Search'))
const CheckPage = React.lazy(() => import('../pages/Check'))
const PromotionPage = React.lazy(() => import('../pages/Promote'))

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
            },
            {
                path : '/app/search',
                element : <SearchPage/>
            },
            {
                path : '/app/check',
                element : <CheckPage/>
            },
            {
                path : '/app/promotion',
                element : <PromotionPage/>
            }
        ]
    }
])

export default router