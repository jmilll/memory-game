import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList';
import Header from './components/Header';
import {useState, useEffect} from 'react';

const App = () => {

  const [score, setScore] = useState(0)
  const [lastScore, setLastScore] = useState(0)
  const [hiScore, setHiScore] = useState(0)
  const [cardsArr, setCardsArr] = useState([])
  const [difficulty, setDifficulty] = useState(1)
  const [perfectScore, setPerfectScore] = useState(6)

  const reset = () => {
    setScore(0)
    setCardsArr([])
  }

  const scoreUp = () => {
    console.log(score)
    setScore((prevScore) => prevScore + 1)
  }

  const handleLastScore = () => {
    setLastScore(score)
  }

  const handleHiScore = () => {
    score > hiScore ? setHiScore(score) : reset()
    //setHiScore(score)
  }

  const handlePerfectScore = () => {
    difficulty === 1 ? setPerfectScore(6) : 
    difficulty === 2 ? setPerfectScore(12) :
    setPerfectScore(18)
    //setHiScore(score)
  }

  const addChosenCard = (card) => {
    //const newArr = cardsArr.concat(card)
    //const newArr = [...cardsArr, card]
    //setCardsArr(newArr)
    setCardsArr(prevArr => [...prevArr, card])
    //console.log(card)
    //console.log(newArr)
  }

  const checkMemory = (card) => {
    console.log(card)
    //console.log({cardsArr})
    if(!cardsArr.includes(card)) {
      console.log('keep going')
      addChosenCard(card)
      scoreUp()
    } else {
      console.log('lose')
      handleLastScore()
      handleHiScore()
      reset()
    }
  }

  // const changeDifficultyU = () => {
  //   console.log('difficulty = ' + difficulty)
  //   setDifficulty((prevDifficulty) => prevDifficulty + 1)
  // }

  // const changeDifficultyD = () => {
  //   console.log('difficulty = ' + difficulty)
  //   setDifficulty((prevDifficulty) => prevDifficulty - 1)
  // }

  const changeDifficultyEasy = () => {
    setDifficulty(1)
  }

  const changeDifficultyMedium = () => {
    setDifficulty(2)
  }

  const changeDifficultyHard = () => {
    setDifficulty(3)
  }

  const changeDifficultyExtreme = () => {
    setDifficulty(4)
  }

  useEffect(() => {
    handlePerfectScore()
  }, [difficulty])

  // useEffect(() => {
  //   console.log('use effect')
  //   const cards = document.querySelectorAll('.card');

  //   const testcard = (e) => {
  //     console.log(e.id)
  //     if(typeof e.id === 'string') {console.log('string')}
  //     else {console.log('not string')}
  //   } 

  //   //cards.forEach(card => card.addEventListener('click', () => addChosenCard(card.id)))
  //   cards.forEach(card => card.addEventListener('click', () => checkMemory(card.id)))
    

  //   return () => {
  //     console.log(' unmount use effect...')
  //     //cards.forEach(card => card.removeEventListener('click', addChosenCard(card.id)))
  //     cards.forEach(card => card.addEventListener('click', () => checkMemory(card.id)))
  //   }
  // }, [setScore,setHiScore,setCardsArr])


  return (
    <div className="App">
      {/* <p>{cardsArr}</p> */}
      <Header score={score} lastScore={lastScore} hiScore={hiScore} perfectScore={perfectScore} />
     
      <div className='difficulty-container'>
        <button className='btn' onClick={() => changeDifficultyEasy()}>Easy</button>
        <button className='btn' onClick={() => changeDifficultyMedium()}>Medium</button>
        <button className='btn' onClick={() => changeDifficultyHard()}>Hard</button>
        <button className='btn extreme' onClick={() => changeDifficultyExtreme()}>Extreme</button>
      </div>
     
      <CardList score={score} checkMemory={checkMemory} difficulty={difficulty} />
    </div>
  );
}

export default App;
