import React from 'react'
import Proceed from '../components/Proceed'
import PlanSelection from '../components/PlanSelection'
import heroSVG from '../images/illustration-hero.svg'



const Card = () => {
    return (
        <main className="card">
            <h1 className="sr-only">Order Summary Card Component</h1>
            <img className="heroImage" src={heroSVG} alt="" aria-hidden="true" />
            <div className="cardContent">
                <h2>Order Summary</h2>
                <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                <PlanSelection />
                <Proceed />
                <a href="#" className="cancelOrder">Cancel Order</a>
            </div>
        </main>
    )
}

export default Card
