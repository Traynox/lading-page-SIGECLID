import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import LoginScreen from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/login" element={<LoginScreen />} /> */}
                <Route path="/*" element={
                    // <PublicRoute>
                    <DashboardRoutes />
                    /* </PublicRoute> */
                }
                />
                {/* <Route path='/*' element={
                    <PrivateRoute>
                    </PrivateRoute>
                }
                /> */}
                {/* <Route path="/*" element={<DashboardRoutes/>} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter