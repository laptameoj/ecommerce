import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Cart = new Schema({
  products:[{
    item: {type: Schema.Types.ObjectId, ref:'Product', required: true}
    , quantity: {type: Number, min: 1}
  }]
})

export { Cart }
