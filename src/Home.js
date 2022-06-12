import React from 'react'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Gallery } from './components/Gallery'

// import { CustomersReviews } from './components/CustomersReviews'
// import { Video } from './components/Video'
import { Products } from './pages/Products'
import '../src/styles/home.scss'

export const Home = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <Navbar />
            </div>
            <div className='home-container'>
                <Products />
                
                <div className='gallery-div'>
                    <h1 className='gallery-title'>Galeria</h1>
                    <Gallery />
                </div>
                {/* <div>
                    <Video />
                </div> */}
                {/* <div>
                    <CustomersReviews />
                </div> */}

            </div>
        </>
    )
}
