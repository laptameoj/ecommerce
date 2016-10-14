import userCtrl from './userCtrl'

export default function(app) {
 app.route('/api/user')
  .post(userCtrl.postUser)

  app.route('/api/user/:id')
    .get(userCtrl.getUser)
}
