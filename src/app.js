const express = require('express')
const app = express()

const peliculasRouter = require('./routes/peliculas')

app.use(express.json())

app.use('/', peliculasRouter)



app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000/peliculas')
})



