import React from 'react'

const Header = (props) => {

    const { score, lastScore, hiScore, perfectScore} = props

    return (
        <section className='header'>
            <h1>Magic Memory Game </h1>
            <div className='scoreboard'>
                <p>Current streak: {score}</p>
                <p>Last streak: {lastScore}</p>
                <p>Your personal best: {hiScore}</p>
                <p>Perfect score would be: {perfectScore} </p>
            </div>
        </section>
    )
}

export default Header
