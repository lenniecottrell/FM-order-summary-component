import React from 'react'
import Proceed from '../components/Proceed'
import PlanSelection from '../components/PlanSelection'
import { ReactComponent as Hero } from '../images/illustration-hero.svg'



const Card = () => {

    return (
        <div className="card">
            <Hero className="heroImage"/>
            <div className="cardContent">
                <h2>Order Summary</h2>
                <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                <PlanSelection />
                <Proceed />
                <a href="#" className="cancelOrder">Cancel Order</a>
            </div>
        </div>
    )
}

export default Card