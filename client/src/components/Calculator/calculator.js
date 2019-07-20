import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'

const defaultCalc = {
  total: null,
  incomingNum: null,
}

const Calculator = _ => {
  const [calcState, setCalcState] = useState(defaultCalc)

  const getDigit = (event, extraValue) => {
    let newTotal;
    if (extraValue) {
      setCalcState({ total: event.currentTarget.id })
    } else {
    setCalcState({
      total: calcState.total 
        ? calcState.total + event.currentTarget.id
        : event.currentTarget.id 
      })
    }
  }

  const clear = _ => {
    setCalcState(defaultCalc)
  }

  return (
    <div>
      <h1>{calcState.total}</h1>
      <div>
        <Button variant="contained" color="primary" id='1' onClick={getDigit}>1</Button>
        <Button variant="contained" color="primary" id='2' onClick={getDigit}>2</Button>
        <Button variant="contained" color="primary" id='3' onClick={getDigit}>3</Button>
        <br />

        <Button variant="contained" color="primary" id='4' onClick={getDigit}>4</Button>
        <Button variant="contained" color="primary" id='5' onClick={getDigit}>5</Button>
        <Button variant="contained" color="primary" id='6' onClick={getDigit}>6</Button>
        <br />

        <Button variant="contained" color="primary" id='7' onClick={getDigit}>7</Button>
        <Button variant="contained" color="primary" id='8' onClick={getDigit}>8</Button>
        <Button variant="contained" color="primary" id='9' onClick={getDigit}>9</Button>
        <br />

        <Button variant="contained" color="primary" id='0' onClick={getDigit}>0</Button>
      </div>
      <div>
        <Button variant="contained" color="default" id='10' onClick={(e) => getDigit(e, true)}>$10</Button>
        <Button variant="contained" color="default" id='20' onClick={(e) => getDigit(e, true)}>$20</Button>
        <Button variant="contained" color="default" id='50' onClick={(e) => getDigit(e, true)}>$50</Button>
        <Button variant="contained" color="default" id='100' onClick={(e) => getDigit(e, true)}>$100</Button>
        <Button variant="contained" color="secondary" onClick={clear}>Delete</Button>
      </div>
    </div>
  )
}

export default Calculator 