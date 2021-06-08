import React from 'react'

function ProcessCard(props) {
    return (
        <><div className="flex my-2">
            <div className="bg-green-500 border border-green-700 w-96 flex text-center rounded-xl justify-between">
                <h1 className="font-bold p-10 text-white text-3xl uppercase text-center m-auto">{props.callword}</h1>
                <p className="py-4 px-6 text-5xl font-black -mr-10 bg-white rounded-full my-auto border-4 border-green-600">{props.num}</p>
            </div>
            <div className="w-full">
                <h1 className="text-5xl font-bold px-16 py-4 text-gray-700">{props.title}</h1>
                <p className="px-16 text-gray-500">{props.desc}</p>
            </div>

        </div>
        <hr/>
        </>
    )
}

export default ProcessCard
