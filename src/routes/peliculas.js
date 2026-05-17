const express = require('express')
const router = express.Router()

let peliculas = []

//Metodo Get 
router.get('/peliculas', (req, res) => {
    res.json(peliculas)
})

//Método POST 
router.post('/peliculas', (req, res) => {
    const pelicula = req.body
    pelicula.id = peliculas.length + 1
    peliculas.push(pelicula)
    res.json(pelicula)
})

//Método PUT 
router.put('/peliculas/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const pelicula = peliculas.find(p => p.id === id)

    if(pelicula) {
        const nuevaPelicula = req.body

        pelicula.titulo = nuevaPelicula.titulo
        pelicula.director = nuevaPelicula.director
        pelicula.anio = nuevaPelicula.anio
        pelicula.genero = nuevaPelicula.genero


        res.json(pelicula)
    }else {
        res.status(404).send('Pelicula no encontrada')
    }
})

//Método DELETE 
router.delete('/peliculas/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const pelicula = peliculas.find(p => p.id === id)
    
    if(pelicula) {
        peliculas = peliculas.filter(p => p.id != id)
        res.send('Película eliminada')

    } else {
        res.status(404).send('Película no encontrada')
    }


})


module.exports = router