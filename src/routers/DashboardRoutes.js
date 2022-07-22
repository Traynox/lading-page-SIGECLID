import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from '../components/home/header/Navbar';
import HomeScreen from '../components/home/HomeScreen';
import Checkout from '../components/pasarela_pago/Checkout';
// import MarvelScreen from '../components/marvel/MarvelScreen';
// import SearchScreen from '../components/search/SearchScreen';
// import Navbar from '../components/ui/Navbar';
// import DcScreen from '../components/dc/DcScreen';
// import HeroScreen from '../components/hero/HeroScreen';

const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="checkout" element={<Checkout />} />
                {/* <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:idHero" element={<HeroScreen />} />
                    <Route path="/" element={<MarvelScreen />} /> */}
            </Routes>
        </>
    )
}

export default DashboardRoutes