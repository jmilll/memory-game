import React from 'react'
import {useState, useEffect} from 'react';
//doesnt work unless have to import img instead of directly listing as src?
import ajani1 from '../images/Ajani-Valiant-Protector.jpg'
import ajani2 from '../images/Ajani-Mentor-of-Heroes.jpg'
import ajani3 from '../images/Ajani-Goldmane.jpg'

import ashiok1 from '../images/Ashiok-Nightmare-Muse.jpg'
import ashiok2 from '../images/Ashiok-Nightmare-Weaver.jpg'
import ashiok3 from '../images/Ashiok-Dream-Render.jpg'

import chandra1 from '../images/Chandra-Ablaze.jpg'
import chandra2 from '../images/Chandra-Torch-of-Defiance.jpg'
import chandra3 from '../images/Chandra-Pyromaster.jpg'

import garruk1 from '../images/Garruk-Apex-Predator.jpg'
import garruk2 from '../images/Garruk-the-Veil-Cursed.jpg'
import garruk3 from '../images/Garruk-Relentless.jpg'

import jace1 from '../images/Jace-Wielder-of-Mysteries.jpg'
import jace2 from '../images/Jace-the-Living-Guildpact.jpg'
import jace3 from '../images/Jace-Beleren.jpg'

import liliana1 from '../images/Liliana-Death-Mage.jpg'
import liliana2 from '../images/Liliana-the-Necromancer.jpg'
import liliana3 from '../images/Liliana-Dreadhorde-General.jpg'




// ../images/Ajani-Mentor-of-Heroes.jpg
// ../images/Ajani-Valiant-Protector.jpg
// ../images/Ashiok-Nightmare-Muse.jpg
// ../images/Ashiok-Nightmare-Weaver.jpg
// ../images/Chandra-Ablaze.jpg
// ../images/Chandra-Torch-of-Defiance.jpg
// ../images/Garruk-Apex-Predator.jpg
// ../images/Garruk-the-Veil-Cursed.jpg
// ../images/Jace-the-Living-Guildpactjpg
// ../images/Jace-Wielder-of-Mysteries.jpg
// ../images/Liliana-Death-Mage.jpg
// ../images/Liliana-the-Necromancer.jpg


const CardList = (props) => {

    const {score, checkMemory, difficulty} = props

    const images = [
        {
            id: 1,
            src: ashiok1,
            title: 'Ashiok, Nightmare Muse',
            artist: 'Raymond Swanland',
        },
        {
            id: 2,
            src: chandra1,
            title: 'Chandra Ablaze',
            artist: 'Steve Argyle',
        },
        {
            id: 3,
            src: garruk1,
            title: 'Garruk, Apex Predator',
            artist: 'Tyler Jacobson',
        },
        {
            id: 4,
            src: jace1,
            title: 'Jace, Wielder of Mysteries',
            artist: 'Anna Steinbauer',
        },
        {
            id: 5,
            src: liliana1,
            title: 'Liliana, Death Mage',
            artist: 'Kieran Yanner',
        },
        {
            id: 6,
            src: ajani1,
            title: 'Ajani, Valiant Protector',
            artist: 'Anna Steinbauer',
        },
    ]

    const imagesMed = [
        {
            id: 7,
            src: ashiok2,
            title: 'Ashiok, Nightmare Weaver',
            artist: 'Karla Ortiz',
        },
        {
            id: 8,
            src: chandra2,
            title: 'Chandra, Torch of Defiance',
            artist: 'Magali Villeneuve',
        },
        {
            id: 9,
            src: garruk2,
            title: 'Garruk, the Veil-Cursed',
            artist: 'Grzegorz Rutkowski',
        },
        {
            id: 10,
            src: jace2,
            title: 'Jace, the Living Guildpact ',
            artist: 'Chase Stone',
        },
        {
            id: 11,
            src: liliana2,
            title: 'Liliana, the Necromancer',
            artist: 'Livia Prima',
        },
        {
            id: 12,
            src: ajani2,
            title: 'Ajani, Mentor of Heroes',
            artist: 'Aaron Miller',
        },
    ]

    const imagesHard = [
        {
            id: 13,
            src: ashiok3,
            title: 'Ashiok, Dream Render',
            artist: 'Cynthia Sheppard',
        },
        {
            id: 14,
            src: chandra3,
            title: 'Chandra, Pyromaster',
            artist: 'Winona Nelson',
        },
        {
            id: 15,
            src: garruk3,
            title: 'Garruk Relentless',
            artist: 'Eric Deschamps',
        },
        {
            id: 16,
            src: jace3,
            title: 'Jace Beleren',
            artist: 'Aleksi Briclot',
        },
        {
            id: 17,
            src: liliana3,
            title: 'Liliana, Dreadhorde General',
            artist: 'Chris Rallis',
        },
        {
            id: 18,
            src: ajani3,
            title: 'Ajani Goldmane',
            artist: 'Aleksi Briclot',
        },
    ]

    //initializes images as the cards under useeffect
    const [cards, setCards] = useState([])

    const ez = [...images]
    const med = [...images, ...imagesMed]
    const hard = [...images, ...imagesMed, ...imagesHard]

    // const testClick = (e, f) => {
    //     console.log(e)
    //     //console.log(f)
    // }

    function logez() {
        const ez = [...images]
        console.log(ez.length)
    }

    function logmed() {
        const med = [...images, ...imagesMed]
        console.log(med.length)
    }



    //randomizes cards on each card click, referencing the score as the change catalyst
    const shuffle = (newCards) => {
        for (let i = newCards.length - 1; i > 0; i--) {
            let randomIdx = Math.floor(Math.random() * i);
            [newCards[randomIdx], newCards[i]] = [newCards[i], newCards[randomIdx]];
        }
    };

    useEffect(() => {
        const newCards = [...cards];
        shuffle(newCards);
        setCards(newCards);
    }, [score]);

    //changes cards only when diff changes
    useEffect(() => {
        if (difficulty === 1) {
            setCards(ez)
        } else if (difficulty === 2) {
            setCards(med)
        } else {
            setCards(hard)
        }

        return () => {
            //cleanup
        }
    }, [difficulty])


    // const randomize = (arr) => {
    //     for (let i = 0; i < arr.length; i++) {
    //         let randomIndex = Math.floor(Math.random() * arr.length - 1)
    //         [arr[randomIndex], arr[i]] = [arr[i], arr[randomIndex]]

    //     }
        
    // }

    //randomizes cards on each card click, referencing the score as the change catalyst
    // useEffect(() => {
    //     console.log('shuffle')
    //     const arr = [...cards]
    //     randomize(arr)
    //     setCards(arr)



    //     return () => {
    //         //cleanup
    //     }
    //}, [score])



    return (
        <section className='card-container'>
            
            {/* <button onClick={() => {logez()}}>ez arr</button>
            <button onClick={() => {logmed()}}>med arr</button> */}
            {cards.map(img => {
                return (
                    <div className='card' key={img.title} id={img.title}  onClick={checkMemory.bind(this, img.title)}>
                        <h2>{img.title}</h2>
                        <img src={img.src} alt={img.title} />
                        <p className='artist'>Artist: {img.artist}</p>
                    </div>
                )
            })}

            {/* {images.map(img => {
                return (
                    <div className='card' key={img.title} id={img.title}  onClick={checkMemory.bind(this, img.title)}>
                        <h2>{img.title}</h2>
                        <img src={img.src} alt={img.title} />
                        <p className='artist'>Artist: {img.artist}</p>
                    </div>
                )
            })} */}

        </section>


    )






    // if (difficulty === 1) {
    //     return (
    //         <section className='card-container'>
                
    //             <button onClick={() => {logez()}}>ez arr</button>
    //             <button onClick={() => {logmed()}}>med arr</button>
    
    //             {images.map(img => {
    //                 return (
    //                     <div className='card' key={img.title} id={img.title}  onClick={checkMemory.bind(this, img.title)}>
    //                         <h2>{img.title}</h2>
    //                         <img src={img.src} alt={img.title} />
    //                         <p className='artist'>Artist: {img.artist}</p>
    //                     </div>
    //                 )
    //             })}
    
    //         </section>
    //     )
    // } else if (difficulty === 2) { 
    //     return (
    //         <h2>MEDIUM DIFF</h2>
    //     )
    // } else {
    //     return (
    //         <h2>HARD DIFF</h2>
    //     )
    // }

        
}

export default CardList
