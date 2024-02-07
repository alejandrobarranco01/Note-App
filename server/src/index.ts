import express from 'express'
import './db' // import db
import noteRouter from './routers/note'

const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: false})) // for parsing application/x-www-form-urlencoded

app.listen(8000, () => {
    console.log('Server running on port 8000')
})

app.use('/note', noteRouter);