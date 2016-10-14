import Order from './Order'
import User from '../users/User'
import mongoose from 'mongoose'

export default{
  postOrder(req, res){
    let userId = req.params.id
    User.findById(userId, (err, result)=> {
      if (err) {
        res.status(500)
      }
      let userObj = result;
      var userOrder = {}
      userOrder.products = userObj.cart
      userOrder.userId = userId
      let newOrder = new Order(userOrder)
      newOrder.save((err, results)=>{
        if (err){
          res.status(500)
        }
        userObj.cart = []
        userObj.orders.push(mongoose.Types.ObjectId(result._id))
        userObj.update({$push: {order: mongoose.Types.ObjectId(result._id)}},
        userObj.save((err, result)=>{
          if (err){
            res.status(500)
          }
          res.status(201).json(result)
        }))
      })
    })
  },
  getOrder(req, res){
    Order.find(req.query, (err, result)=>{
      if (err){
        res.status(500)
      }
      res.status(201).json(result)
    })
  }
}
