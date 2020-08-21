const mongoose = require("mongoose");

const posts = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("posts", posts);

const fectchdata = async () => {
  const resulty = await fetch("http://localhost:3000/post");
    console.log(resulty);

}
fectchdata();