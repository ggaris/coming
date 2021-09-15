import React from 'react'
import "./Card.less"
interface CardProps extends InheritableClassName {
    title:HTMLAnchorElement
}

const Card:React.FunctionComponent<CardProps> = (props)=>{
    return (
        <div className={`cui-card ${props.className}`}>
            <div className="cui-card-titke"></div>
        </div>
    )
}


export default Card