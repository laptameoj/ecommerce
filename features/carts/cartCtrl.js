import User from '../users/User'

export default {
  postCart(req, res){
    User.findByIdAndUpdate(req.params.user_id, {$push: {cart: req.body}}, (err, result)=>{
      if (err) return res.status(500).json(err)
      return res.status(201).json(result)
    })
  },
  putCart(req, res){
    User.findById(req.params.user_id, (err, result) =>{
      if (err) return res.status(500).json(err)

      let myUser = result
      let qty = req.query.gty / 1
      let foundItem = -1
      myUser.cart.forEach((cartItem, index)=>{
        if (carItem._id.toString() === req.query.itmId){
          foundItem = index
        }
      })
      if (foundItem >= 0) {
        console.log('Found Item = ' + foundItem)
        if (qty === 0) {
          myUser.cart.splice(foundItem, 1)
        } else {
          myUser.cart[foundItem].qty = qty
        }
      }
      saveUser(myUser, req, res)
    })
    function saveUser(userToSave, req, res) {
      userToSave.save((err, userResult)=>{
        if(err) {
          res.status(500).send(err)
        } else {
          res.send(userResult)
        }
      })
    }
  }

}
