import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
})

export default function ImgMediaCard () {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt=""
          height="140"
          image=""
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {/* insert succulent here */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography>
          {/* insert succulent price here */}
        </Typography>
        <Typography>
          {/* insert succulent quantity here */}
        </Typography>
      </CardActions>
    </Card>
  )
}
