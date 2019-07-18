import React, { useState } from 'react' 
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'

const Calculator = _ => {
    const [ calcState, setCalcState ] = useState ({
        result: null, 
        a: '',
        displayValue: 0, 
    })

    calcState.getDigit = event => {
      console.log(event)
      setCalcState({ ...calcState, a: calcState.a + event.target.id })
    }

    calcState.clear = _ => {
        setCalcState ({ ...calcState, displayValue: 0 })
    }

    return (
      <div>
        <h1>{calcState.a}</h1>
        <div> 
          <Button variant="contained" color="primary" id='1' onClick={calcState.getDigit}>1</Button>
          <Button variant="contained" color="primary" id='2' onClick={calcState.getDigit}>2</Button>
          <Button variant="contained" color="primary" id='3' onClick={calcState.getDigit}>3</Button>
          <br />

          <Button variant="contained" color="primary" id='4' onClick={calcState.getDigit}>4</Button>
          <Button variant="contained" color="primary" id='5' onClick={calcState.getDigit}>5</Button>
          <Button variant="contained" color="primary" id='6' onClick={calcState.getDigit}>6</Button>
          <br />

          <Button variant="contained" color="primary" id='7' onClick={calcState.getDigit}>7</Button>
          <Button variant="contained" color="primary" id='8' onClick={calcState.getDigit}>8</Button>
          <Button variant="contained" color="primary" id='9' onClick={calcState.getDigit}>9</Button>
          <br />
          
          <Button variant="contained" color="primary" id='0' onClick={calcState.getDigit}>0</Button>
        </div>
        <div>
          <Button variant="contained" color="default" id='10' onClick={calcState.getDigit}>$10</Button>
          <Button variant="contained" color="default" id='20' onClick={calcState.getDigit}>$20</Button>
          <Button variant="contained" color="default" id='50' onClick={calcState.getDigit}>$50</Button>
          <Button variant="contained" color="default" id='100' onClick={calcState.getDigit}>$100</Button>
          <Button variant="contained" color="secondary" onclick={calcState.clear}>Delete</Button>
        </div> 
      </div>
    )
}

export default Calculator 