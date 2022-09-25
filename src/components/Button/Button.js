import React from 'react'

const Button = ({type, onClick, children}) => {
    return (
        <div>
            <button
                children = {children}
                onClick = {onClick}
                type = {type}
            />
        </div>
    )
}

export default Button
