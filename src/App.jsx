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

const App = () => {

    return (
        <>
            <NavBar />
            <Hero />
            <MainPage />
            <Invest />
            <OpenHouseCard />
        </>
    )
}

export default App
