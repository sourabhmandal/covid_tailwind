import React from 'react'

function Circle({props}) {
    return (
        <svg
            height="150"
            width="150"
            viewBox="0 0 20 20"
            className="mx-auto mb-12"
        >
            <circle r="10" cx="10" cy="10" fill="#4299e1" />
            <circle
            r="5"
            cx="10"
            cy="10"
            fill="transparent"
            stroke="#2b6cb0"
            strokeWidth="10"
            strokeDasharray="11 31.4"
            transform="rotate(-90) translate(-20)"
            />
        </svg>
    )
}

export default Circle
