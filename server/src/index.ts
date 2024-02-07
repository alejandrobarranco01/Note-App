import express from 'express'
import './db' // import db
import noteRouter from './routers/note'

// Defines a structure with a required title property of type string an optional description property of type string
export interface IncomingBody {
    title: string
    description?: string
}

const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: false})) // for parsing application/x-www-form-urlencoded

app.listen(8000, () => {
    console.log('Server running on port 8000')
})

app.use(noteRouter);