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
    //setHiScore(score)
  }

  const handlePerfectScore = () => {
    difficulty == 1 ? setPerfectScore(6) : 
    difficulty == 2 ? setPerfectScore(12) :
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
      resetRound()
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


  // const changeDifficultyEasy = (e) => {
  //   setDifficulty(1)
  //   removeSelections()
  //   e.target.classList.add('selected')
  // }

  // const changeDifficultyMedium = (e) => {
  //   setDifficulty(2)
  //   removeSelections()
  //   e.target.classList.add('selected')
  // }

  // const changeDifficultyHard = (e) => {
  //   setDifficulty(3)
  //   removeSelections()
  //   e.target.classList.add('selected')
  // }

  // const changeDifficultyExtreme = (e) => {
  //   setDifficulty(4)
  //   removeSelections()
  //   e.target.classList.add('selected')
  // }

  useEffect(() => {
    handlePerfectScore()
    resetAll()
  }, [difficulty])

  


  // onClick={changeDifficultyMedium.bind(this)}

  // onClick={checkMemory.bind(this, img.title)}
  // <div className='difficulty-container'>
  //  <button className='btn selected' onClick={() => changeDifficultyEasy()}>Easy</button>
  //  <button className='btn' onClick={changeDifficultyMedium.bind(this)}>Medium</button>
  //  <button className='btn' onClick={() => changeDifficultyHard()}>Hard</button>
  //  <button className='btn extreme' onClick={() => changeDifficultyExtreme()}>Extreme</button>
  // </div>

//   <div className='difficulty-container'>
//   <button className='btn selected' onClick={changeDifficultyEasy.bind(this)}>Easy</button>
//   <button className='btn' onClick={changeDifficultyMedium.bind(this)}>Medium</button>
//   <button className='btn' onClick={changeDifficultyHard.bind(this)}>Hard</button>
//   <button className='btn extreme' onClick={changeDifficultyExtreme.bind(this)}>Extreme</button>
// </div>


  return (
    <div className="App">
      {/* <p>{cardsArr}</p> */}
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
