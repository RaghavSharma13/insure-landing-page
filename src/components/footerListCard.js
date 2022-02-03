import React from 'react'
import './styles/footerListCard.css'
const FooterListCard = ({heading,list}) => {
    return (
        <div className="footerListCard flex-col">
            <h4>{heading}</h4>
            <ul>
                {list.map((ele,index) => <li key={index}>{ele}</li>)}
            </ul>
        </div>
    )
}

export default FooterListCard
