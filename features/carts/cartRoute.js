import cartCtrl from './cartCtrl'

export default function(app) {
  app.route('localhost:4000/api/cart/:user_id')
      .post(cartCtrl.postCart)
      .put(cartCtrl.putCart)
}
