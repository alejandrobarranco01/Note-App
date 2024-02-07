import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/note-app') // connect to DB
.then(() => {console.log('Connected to DB!')}) 
.catch((err) => {
    console.log('DB connection error: ', err)
})