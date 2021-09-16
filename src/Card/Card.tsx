import React from 'react'
import "./Card.less"
interface CardProps extends InheritableClassName {
    title:string
}

const Card:React.FunctionComponent<CardProps> = (props)=>{
    return (
        <div className={`cui-card ${props.className}`}>
            <div className="cui-card-title">{props.title}</div>
            <div className="cui-card-content padding-medium">
                {props.children}
            </div>
        </div>
    )
}


export default Card