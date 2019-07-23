import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [testVal, setTestVal] = React.useState("");

  function handleChange(e) {
    setTestVal(e.target.value);
  }
  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        +
        <br />
        Add Item
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <Button variant="outlined" fullWidth="true">
            {/* <!--   PHOTO--> */}
            <form action="/item" enctype="multipart/form-data" method="POST">
              <input type="file" name="picture" accept="image/*" />
              <input type="submit" value="Upload Photo" />
              <input type="text" name="name" value={testVal} />
              
            </form>
            Open Camera
          </Button>
          <Box
            borderColor="grey.400"
            m={1}
            border={1}
            style={{ height: "10rem" }}
            fullWidth="true"
          >
            {/* <Button variant="outlined">Choose File</Button> */}
            {/* <input
              hidden
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button variant="outlined" component="span">
                Choose File
              </Button>
            </label> */}
          </Box>

          <TextField
            id="outlined-name"
            label="Product Name"
            // className={classes.textField}
            // value={values.name}
            // onChange={handleChange('name')}
            margin="normal"
            variant="outlined"
            fullWidth="true"
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="outlined-name"
                label="$0.00"
                // className={classes.textField}
                value={testVal}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-name"
                label="QTY"
                // className={classes.textField}
                // value={values.name}
                // onChange={handleChange('name')}
                margin="normal"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                onClick={handleClose}
                fullWidth="true"
                variant="contained"
                color="primary"
              >
                Add Item
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                onClick={handleClose}
                fullWidth="true"
                variant="contained"
                color="secondary"
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
}
