require('dotenv').config()

const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const mongoString = process.env.DATABASE_URL
const port = process.env.PORT
const host = process.env.HOST
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./src/swagger.json')

mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error) => {
	console.log(error)
	console.error(error)
})

database.once('connected', () => {
	console.log('Database Connected')
})

const app = express()
app.use(cors())
app.use(express.json())

const routes = require('./src/routes/routes')

app.get('/', (req, res) => {
	res.type('text/plain')
	res.status(200).send('Welcome! Go to /api-docs to see the documentation')
})
app.use('/api', routes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use((req, res) => {
	res.type('text/plain')
	res.status(404)
	res.send('404 - Not Found')
})

app.listen(port, () => {
	console.log(`Server started at ${port}`)
	console.log(`Go to http://${host}:${port}`)
})
