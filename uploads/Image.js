module.exports = (Schema, model) => {
  const Image = new Schema({
    imageName: {
      type: String,
      required: true
    }
  });
  return model("Image", Image);
};
