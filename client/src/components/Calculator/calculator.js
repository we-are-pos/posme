import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'
import Grid from "@material-ui/core/Grid"


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
    <div style={{ height: '700px'}} >
      {/* <h1>{calcState.total}</h1> */}

      <Grid container spacing={4}>
      <Grid item xs={12}>
        <h1>{calcState.total}</h1>
        </Grid>

        <Grid item xs={3}>
        <Button variant="contained" color="default" id='10' onClick={(e) => getDigit(e, true)}>$10</Button>
        </Grid>
        <Grid item xs={3}>

        <Button variant="contained" color="primary" id='7' onClick={getDigit}>7</Button>
        </Grid>
        <Grid item xs={3}>

        <Button variant="contained" color="primary" id='8' onClick={getDigit}>8</Button>
        </Grid>
        <Grid item xs={3}>

        <Button variant="contained" color="primary" id='9' onClick={getDigit}>9</Button>
        </Grid>

        <Grid item xs={3}>
        <Button variant="contained" color="default" id='20' onClick={(e) => getDigit(e, true)}>$20</Button>
        </Grid>

        <Grid item xs={3}>
        <Button variant="contained" color="primary" id='4' onClick={getDigit}>4</Button>
        </Grid>

        <Grid item xs={3}>
        <Button variant="contained" color="primary" id='5' onClick={getDigit}>5</Button>
        </Grid>

        <Grid item xs={3}>
        <Button variant="contained" color="primary" id='6' onClick={getDigit}>6</Button>
        </Grid>

        <Grid item xs={3}>

        <Button variant="contained" color="default" id='50' onClick={(e) => getDigit(e, true)}>$50</Button>
        </Grid>
        <Grid item xs={3}>

        <Button variant="contained" color="primary" id='1' onClick={getDigit}>1</Button>
        </Grid>
        <Grid item xs={3}>

        <Button variant="contained" color="primary" id='2' onClick={getDigit}>2</Button>
        </Grid>
        <Grid item xs={3}>
        <Button variant="contained" color="primary" id='3' onClick={getDigit}>3</Button>
        </Grid>

        <Grid item xs={4}>
        <Button variant="contained" color="primary" onClick={clear}>ENTER</Button>
        </Grid>
        <Grid item xs={4}>
        <Button variant="contained" color="primary" id='0' onClick={getDigit}>0</Button>
        </Grid>
        <Grid item xs={4}>
        <Button variant="contained" color="secondary" onClick={clear}>DELETE</Button>
      </Grid>
      </Grid>
    </div>
  )
}

export default Calculator 