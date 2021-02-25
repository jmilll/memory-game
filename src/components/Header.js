import React from 'react'

const Header = () => {
    return (
        <section className='header'>
            <h1>Magic Memory Game </h1>
            <div className='scoreboard'>
                <p>Current: </p>
                <p>Personal Best: </p>
                <p>Perfect is: </p>
            </div>
        </section>
    )
}

export default Header
