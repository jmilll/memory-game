import React from 'react'

const Header = (props) => {

    const { score, lastScore, hiScore, perfectScore} = props

    return (
        <section className='header'>
            <h1>Magic Memory Game </h1>
            <div className='scoreboard'>
                <p className='instructions'>Get points for choosing a card, but don't click on the same card more than once! Cards randomize afer each click</p>
            
                <div className='personal-score'>
                    <p>Current Streak: {score}</p>
                    <p>Last Streak: {lastScore}</p>
                    <p>High Score: {hiScore}</p>
                </div>
                <p className='perfect-score'>Perfect score for this difficulty: {perfectScore} </p>
            </div>
        </section>
    )
}

export default Header
