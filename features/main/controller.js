// import mongo from 'mongojs'
// const db = mongo('dvmtn-ecom', ['products'])
//
// export default {
//   getProducts(req, res){
//     var query = req.query;
//   	db.products.find(query, (err, response) => {
//   		if(err) {
//   			res.status(500).json(err);
//   		} else {
//   			res.json(response);
//   		}
//   	});
//   },
//   getProductById(req, res){
//     var idObj = {
//   		_id: mongo.ObjectId(req.params.id)
//   	};
//   	db.products.findOne(idObj, function(err, response){
//   		if(err) {
//   			res.status(500).json(err);
//   		} else {
//   			res.json(response);
//   		}
//   	});  },
//   postProduct(req, res){
//     db.products.save(req.body, (error, response) => {
//   		if(error) {
//   			return res.status(500).json(error);
//   		} else {
//   			return res.json(response);
//   		}
//   	});
//   },
//   putProductById(req, res){
//     if(!req.params.id){
//   		return res.status(400).send('id query needed');
//   	}
//   	var query = {
//   		_id: mongo.ObjectId(req.params.id)
//   	};
//   	db.products.update(query, req.body, function(error, response){
//   		if(error) {
//   			return res.status(500).json(error);
//   		} else {
//   			return res.json(response);
//   		}
//   	});
//   },
//   deleteProduct(req, res){
//     if(!req.params.id){
//   		return res.status(400).send('id query needed');
//   	}
//   	var query = {
//   		_id: mongo.ObjectId(req.params.id)
//   	};
//   	db.products.remove(query, function(error, response){
//   		if(error) {
//   			return res.status(500).json(error);
//   		} else {
//   			return res.json(response);
//   		}
//   	});
//   }
// }
