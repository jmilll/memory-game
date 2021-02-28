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
      <p>{cardsArr}</p>
      <button onClick={() => checkMemory('jace')}>add jace</button>
      <button onClick={() => checkMemory('chandra')}>add chandra</button>
      <button onClick={scoreUp}>score up</button>
      <button onClick={reset}>reset</button>
      <Header score={score} lastScore={lastScore} hiScore={hiScore} />
      <CardList checkMemory={checkMemory} />
    </div>
  );
}

export default App;
