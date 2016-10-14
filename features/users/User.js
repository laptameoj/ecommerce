import mongoose from 'mongoose'
import { Cart } from '../carts/Cart'

const User = new mongoose.Schema({
  name: { type: String, required: true }
  , email: { type: String, required: true, unique: true, index: true }
  , password: { type: String, required: true }
  , cart: [Cart]
  , orders: []
})

export default mongoose.model("User", User)
