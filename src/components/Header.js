import React from 'react'

const Header = (props) => {

    const { score, lastScore, hiScore} = props

    return (
        <section className='header'>
            <h1>Magic Memory Game </h1>
            <div className='scoreboard'>
                <p>Current: {score}</p>
                <p>Last: {lastScore}</p>
                <p>Personal Best: {hiScore}</p>
                <p>Perfect is: </p>
            </div>
        </section>
    )
}

export default Header
