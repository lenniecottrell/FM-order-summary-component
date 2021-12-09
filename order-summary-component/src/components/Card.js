import React from 'react'
import Proceed from '../components/Proceed'
import PlanSelection from '../components/PlanSelection'
import { ReactComponent as Hero } from '../images/illustration-hero.svg'


const Card = () => {
    return (
        <div className="card">
            <Hero className="heroImage"/>
            <h1>Order Summary</h1>
            <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            <PlanSelection />
            <Proceed />
            <a href="#">Cancel Order</a>
        </div>
    )
}

export default Card
