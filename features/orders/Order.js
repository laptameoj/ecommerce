import mongoose from 'mongoose'
const Schema = mongoose.Schema


const Order = new Schema( {
  user: {type: Schema.Types.ObjectId, required:true, ref:'User'}
  , products: [{
    item: {type: Schema.Types.ObjectId, ref: 'Product', required: true}
    , quantity: {type: Number, required: true, min: 1}
  }]
  , ordered: {type: Date, default: new Date()}
} )

export default mongoose.model('Order', Order)
