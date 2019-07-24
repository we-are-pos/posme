import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

class FormDialog extends React.Component {
  state = {
    open: false,
    price: "",
    name: "",
    inventory: "",
    desc: "",
    submit: ""
  };
  handleClickOpen = _ => {
    this.setState({ open: true });
  };
  handleClose = _ => {
    this.setState({ open: false });
  };
  handleName = event => {
    this.setState({ name: event.target.value });
  };
  handlePrice = event => {
    this.setState({ price: event.target.value });
  };
  handleInventory = event => {
    this.setState({ inventory: event.target.value });
  };
  handleDescription = event => {
    this.setState({ desc: event.target.value });
  };
  handleSubmit = event => {
    console.log("submit button working");
    event.preventDefault();
    const { name, price, inventory } = this.state;
    // console.log(
    //   `name is ${this.state.name} and price is ${
    //     this.state.price
    //   } and inventory is ${this.state.inventory}`
    // );
    axios
      .post("/item", { name, price, inventory })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    this.setState({
      name: "",
      price: "",
      inventory: ""
    });
  };
  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          +
          <br />
          Add Item
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            {/* <Button variant="outlined" fullWidth="true"> */}
            {/* <!--   PHOTO--> */}
            <form action="/item" enctype="multipart/form-data" method="POST">
              <input type="file" name="picture" accept="image/*" />
              <input type="submit" value="Upload Photo" />
              {/* <input type="text" name="name" value={testVal} /> */}
              {/* </form> */}
              Open Camera
              {/* </Button> */}
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
                value={this.state.name}
                onChange={this.handleName}
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
                    value={this.state.price}
                    onChange={this.handlePrice}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-name"
                    label="QTY"
                    // className={classes.textField}
                    value={this.state.inventory}
                    onChange={this.handleInventory}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </form>
          </DialogContent>

          <DialogActions>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button
                  // onClick={handleClose}
                  // value={submit}
                  // onChange={handleSubmit}
                  onClick={this.handleSubmit}
                  // fullWidth="true"
                  variant="contained"
                  color="primary"
                >
                  Add Item
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  onClick={this.handleClose}
                  // fullWidth="true"
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
}

export default FormDialog;

// class FormDialog extends Component {

//   const [open, setOpen] = useState(false);
//   const [price, setPrice] = useState("");
//   const [name, setName] = useState("");
//   const [inventory, setInventory] = useState("");
//   const [desc, setDesc] = useState("");
//   const [submit, setSubmit] = useState("");

//   const handleName = event => setName(event.target.value);

//   const handlePrice = event => setPrice(event.target.value);

//   const handleInventory = event => setInventory(event.target.value);

//   // const handleDesc = event => setDesc(event.target.value);

//   const handleSubmit = event => {
//     event.preventDefault();
//     console.log(
//       `name is ${name} and price is ${price} and inventory is ${inventory}`
//     );
//     setName("");
//     setPrice("");
//     setInventory("");
//   };

//   function handleClickOpen() {
//     setOpen(true);
//   }

//   function handleClose() {
//     setOpen(false);
//   }

//   return (
//     <div>
//       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         +
//         <br />
//         Add Item
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="form-dialog-title"
//       >
//         <DialogContent>
//           {/* <Button variant="outlined" fullWidth="true"> */}
//           {/* <!--   PHOTO--> */}
//           <form action="/item" enctype="multipart/form-data" method="POST">
//             <input type="file" name="picture" accept="image/*" />
//             <input type="submit" value="Upload Photo" />
//             {/* <input type="text" name="name" value={testVal} /> */}
//             {/* </form> */}
//             Open Camera
//             {/* </Button> */}
//             <Box
//               borderColor="grey.400"
//               m={1}
//               border={1}
//               style={{ height: "10rem" }}
//               fullWidth="true"
//             >
//               {/* <Button variant="outlined">Choose File</Button> */}
//               {/* <input
//               hidden
//               accept="image/*"
//               id="contained-button-file"
//               multiple
//               type="file"
//             />
//             <label htmlFor="contained-button-file">
//               <Button variant="outlined" component="span">
//                 Choose File
//               </Button>
//             </label> */}
//             </Box>
//             <TextField
//               id="outlined-name"
//               label="Product Name"
//               // className={classes.textField}
//               value={name}
//               onChange={handleName}
//               margin="normal"
//               variant="outlined"
//               fullWidth="true"
//             />
//             <Grid container spacing={2}>
//               <Grid item xs={6}>
//                 <TextField
//                   id="outlined-name"
//                   label="$0.00"
//                   // className={classes.textField}
//                   value={price}
//                   onChange={handlePrice}
//                   margin="normal"
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   id="outlined-name"
//                   label="QTY"
//                   // className={classes.textField}
//                   value={inventory}
//                   onChange={handleInventory}
//                   margin="normal"
//                   variant="outlined"
//                 />
//               </Grid>
//             </Grid>
//           </form>
//         </DialogContent>

//         <DialogActions>
//           <Grid container spacing={2}>
//             <Grid item xs={6}>
//               <Button
//                 // onClick={handleClose}
//                 // value={submit}
//                 // onChange={handleSubmit}
//                 onClick={() => {
//                   console.log(handleSubmit());
//                 }}
//                 fullWidth="true"
//                 variant="contained"
//                 color="primary"
//               >
//                 Add Item
//               </Button>
//             </Grid>
//             <Grid item xs={6}>
//               <Button
//                 onClick={handleClose}
//                 fullWidth="true"
//                 variant="contained"
//                 color="secondary"
//               >
//                 Cancel
//               </Button>
//             </Grid>
//           </Grid>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

// export default FormDialog
