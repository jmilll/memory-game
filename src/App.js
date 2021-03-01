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

  const resetRound = () => {
    setScore(0)
    setCardsArr([])
  }

  const resetAll = () => {
    setScore(0)
    setCardsArr([])
    setHiScore(0)
    setLastScore(0)
  }

  const scoreUp = () => {
    console.log(score)
    setScore((prevScore) => prevScore + 1)
  }

  const handleLastScore = () => {
    setLastScore(score)
  }

  const handleHiScore = () => {
    score > hiScore ? setHiScore(score) : resetRound()
  }

  const handlePerfectScore = () => {
    difficulty == 1 ? setPerfectScore(6) : 
    difficulty == 2 ? setPerfectScore(12) :
    setPerfectScore(18)
  }

  const addChosenCard = (card) => {
    setCardsArr(prevArr => [...prevArr, card])
  }

  const checkMemory = (card) => {
    if(!cardsArr.includes(card)) {
      console.log('keep going')
      addChosenCard(card)
      scoreUp()
    } else {
      console.log('lose')
      handleLastScore()
      handleHiScore()
      resetRound()
    }
  }

  const changeDifficulty = (e) => {
    let x = Number(e.target.value)
    setDifficulty(x)
    removeSelections()
    e.target.classList.add('selected')
  }

  const removeSelections = () => {
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
      btn.classList.remove('selected')
    })
  }

  useEffect(() => {
    handlePerfectScore()
    resetAll()
  }, [difficulty])
  

  return (
    <div className="App">
      <Header score={score} lastScore={lastScore} hiScore={hiScore} perfectScore={perfectScore} />
     
      <div className='difficulty-container'>
        <button className='btn selected' value='1' onClick={changeDifficulty.bind(this)}>Easy</button>
        <button className='btn' value='2' onClick={changeDifficulty.bind(this)}>Medium</button>
        <button className='btn' value='3' onClick={changeDifficulty.bind(this)}>Hard</button>
        <button className='btn extreme' value='4' onClick={changeDifficulty.bind(this)}>Extreme</button>
      </div>
     
      <CardList score={score} checkMemory={checkMemory} difficulty={difficulty} />
    </div>
  );
}

export default App;
