'use strict';
import express from 'express'
import { json } from 'body-parser'
import cors from 'cors'
import corsConfig from './config/corsConfig'
import mongoose from 'mongoose'

const mongoUri = 'mongodb://localhost:27017'

mongoose.connect(mongoUri)
mongoose.connection.once('open', () => console.log(`Conneted to MongoDB at ${mongoUri}`))

const app = express()
const port = 4000

app.use( cors() )
app.use( json() )
app.use( express.static(__dirname + '/public') )

import masterRoute from './masterRoute'

masterRoute(app)

app.listen(port, () => console.log(`listening on port ${port}`))
