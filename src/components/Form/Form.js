import React from 'react'
import Button from '../Button/Button'

const Form = () => {

    return (
        <div>
            <form>
                <input placeholder='task' required></input>
                <Button
                    children= "+"
                    type="submit"
                    onClick="onClick"
                />
            </form>
        </div>
    )
}

export default Form
