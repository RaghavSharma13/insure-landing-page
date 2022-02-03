import React from 'react'
import './styles/mainCards.css'
const MainCards = ({logo,heading,children}) => {
    return (
        <div className="card flex-col">
            <div className="card--logoWrapper">
                <img className="card--logo" src={logo} alt=""/>
            </div>
            <h2>{heading}</h2>
            <p>{children}</p>
        </div>
    )
}

export default MainCards
