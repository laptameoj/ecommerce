import productCtrl from './productCtrl'

export default function(app){
  app.route('/api/products')
    .get(productCtrl.getProducts)
    .post(productCtrl.postProduct)
}
