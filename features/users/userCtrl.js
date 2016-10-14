import User from './User'

module.exports = {
  postUser(req, res){
    new User(req.body).save((err, result) => {
      if (err) { return res.status(500).json(err)
      }
      return res.status(201).json(result)
    });
  },
  getUser(req, res){
    User
      .findById(req.params.id)
      .populate('cart/product')
      .exec()
      .then( results => {
        return res.status(201).json(results)
      }, err => {
        return res.status(500).json(err)
      })
  }
}
