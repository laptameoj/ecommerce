import Product from './Product'
export default {
  getProducts(req,res) {
    Product.find({}, (err, result)=>{
      if (err){ return res.status(500).json(err)
      }
      return res.status(201).json(result)
    })
  },
  postProduct(req,res) {
    new Product(req.body).save((err, result)=>{
      if (err) { return res.status(500).json(err)
      }
      return res.status(201).json(result)
    })
  }
}
