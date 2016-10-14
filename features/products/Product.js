import mongoose from 'mongoose'

const Product = new mongoose.Schema({
name: {type: String, required: true, trim: true, unique: true}
, description: {type: String, trim: true}
, price: {type: Number, trim: true, required: true}
, cost: {type: Number, trim: true, required: true}
})

export default mongoose.model("Product", Product)
