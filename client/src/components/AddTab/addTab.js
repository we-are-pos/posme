import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import Grid from "@material-ui/core/Grid"

export default function FormDialog() {
  const [open, setOpen] = React.useState(false)
  const [tab, setTab] = React.useState({
    : 
  })

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          +
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
          <TextField
          id="outlined-name"
          label="Tab Name"
          // className={classes.textField}
          value={values.name}
          // onChange={handleChange('name')}
          margin="normal"
          variant="outlined"
          fullWidth="true"
          />
          </DialogContent>
          
          <DialogActions>
            <Grid container spacing={1}>
            <Grid item xs={6}>
            <Button onClick={handleClose} fullWidth="true" variant="contained" color="primary">
              Add Tab
            </Button>
            </Grid>
            <Grid item xs={6}>
            <Button onClick={handleClose} fullWidth="true" variant="contained" color="secondary">
              Cancel
            </Button>
            </Grid>
            </Grid>
          </DialogActions>
        </Dialog>
    </div>
  )
}
