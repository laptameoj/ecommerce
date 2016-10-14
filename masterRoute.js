import orderRoute from './features/orders/orderRoute'
import cartRoute from './features/carts/cartRoute'
import userRoute from './features/users/userRoute'
import productRoute from './features/products/productRoute'

export default function(app) {
  orderRoute(app)
  cartRoute(app)
  userRoute(app)
  productRoute(app)
}
