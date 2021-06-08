import React from 'react'

function CardTypeOne(props) {
    return (
        <div className="flex text-center align-center justify-center rounded-lg shadow-lg border m-8 p-4 w-72">
            <div>
                <div className="flex m-8 justify-center">
                    {props.text != undefined ? <h1 className={`bg-${props.color}-500 p-4 text-white text-center rounded-lg shadow-lg w-16 text-bold`}>{props.text}</h1> : <img src={props.image} className="w-10 h-10"/>}
                </div>
                <div>
                <h1 className="font-bold">{props.heading}</h1>
                <h1 className="text-gray-400 py-4">{props.description}</h1>
                </div>
            </div>
            
        </div>
    )
}

export default CardTypeOne
