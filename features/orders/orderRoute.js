import orderCtrl from './orderCtrl'

export default function(app) {
  app.route('/api/order/:id')
    .post(orderCtrl.postOrder)

  app.route('/api/order/')
    .get(orderCtrl.getOrder)
}
