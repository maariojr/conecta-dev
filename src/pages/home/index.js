import React from 'react'
import Header from './components/Header'

import './style.css'

function Home(){
    return (
        <div>
            <Header />
            
            <main className="main">
                <div className="navbar">
                    <span>nav</span>
                </div>

                <div className="feed">
                    <span>feed</span>
                </div>
            </main>
        </div>
    )
}

export default Home;