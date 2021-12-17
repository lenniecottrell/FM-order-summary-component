import React from 'react'
import { ReactComponent as MusicIcon } from '../images/icon-music.svg'

const PlanSelection = () => {
    return (
        <div className = "planSelection">
            <MusicIcon className="musicIcon" aria-hidden="true"/>
            <div className="planText">
                <h3 className="planType">Annual Plan</h3>
                <p className="price">$59.99/year</p>
            </div>
            <a href='#' className="changeLink"> Change</a>
        </div>
    )
}

export default PlanSelection
