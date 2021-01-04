const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
  },
  imageId: {
    type: mongoose.Types.ObjectId,
    // required: true 
  },
  description: {
      type: String,
  },
  receipt: {
    type: String
  },
  orderDate: {
    type: String
  },
  warranty: {
      type: String,
  }
});

const Item = mongoose.model("Item", ItemSchema);
module.exports = Item;