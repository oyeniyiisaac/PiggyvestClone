import React from 'react'
import NavBar from './component/NavBar.jsx'
import MainPage from './component/MainPage.jsx'
import Hero from './component/Hero.jsx'
import './index.css'
import './component/NavBar.css'
import './component/Hero.css'
import './component/MainPage.css'
// import Master from './component/Invest.jsx'
import Invest from './component/Invest.jsx'
import OpenHouseCard from './component/OpenHouseCard.jsx'
import Testimony from './component/Testimony.jsx'
import Feature from './component/Feature.jsx'
import Footer from './component/Footer.jsx'

const App = () => {

    return (
        <>
            <NavBar />
            <Hero />
            <MainPage />
            <Invest />
            <OpenHouseCard />
            <Testimony />
            {/* <Feature /> */}
            {/* <Footer /> */}
        </>
    )
}

export default App
