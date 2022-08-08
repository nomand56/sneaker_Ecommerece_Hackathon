import React from 'react'
import warning from "../assets/warning.png"
function Error() {
    return (
        <div>

            <img src={warning} />
            <span>PLEASE LOGIN FIRST </span>

        </div>
    )
}

export default Error