import React from 'react'
import "./Card.less"
interface CardProps extends InheritableClassName {
    title?:string
}

const Card:React.FunctionComponent<CardProps> = (props)=>{
    return (
        <div className={`cui-card ${props.className}`}>
            { props.title ? <div className="cui-card-title" dangerouslySetInnerHTML={{__html:props.title}}></div> : null }
            {/* { props.title ? <div className="cui-card-title">{props.title}</div> : null } */}
            <div className="cui-card-content padding-medium">
                {props.children}
            </div>
        </div>
    )
}


export default Card