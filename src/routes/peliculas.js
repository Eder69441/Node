const express = require('express')
const router = express.Router()

const peliculaModel = require('../models/peliculaModel')

//Metodo Get de HTTp
router.get('/peliculas', async (req, res) => {

    try {
        const peliculas = await peliculaModel.obtenerPelicula()
        res.json(peliculas)

    }
    catch(error) {
        res. status(500).send( {error: 'Error consultando las peliculas'})
    }
    
})

//Método POST 
router.post('/peliculas', async (req, res) => {

    try {
        const pelicula = req.body
        const resultado = await peliculaModel.crearPelicula(pelicula)

            res.json({
            mensaje: 'Película creada',
            idInsertado: resultado.insertId
        })
    }   catch(error) {

            res.status(500).json({
            error: 'Error creando película'
        })

    }
    

})

//Método PUT 
router.put('/peliculas/:id', async (req, res) => {
     try {

        const id = req.params.id
        const pelicula = req.body

        const resultado = await peliculaModel.actualizarPelicula(id, pelicula)

        if(resultado.affectedRows === 0) {
            return res.status(404).send('Película no encontrada')
        }

        res.send('Película actualizada')

    } catch(error) {

        res.status(500).send('Error actualizando película')

    }



})

//Método DELETE 
router.delete('/peliculas/:id', async (req, res) => {

    try {

        const id = req.params.id

        const resultado = await peliculaModel.eliminarPelicula(id)

        if(resultado.affectedRows === 0) {
            return res.status(404).send('Película no encontrada')
        }

        res.send('Película eliminada')

    } catch(error) {

        res.status(500).send('Error eliminando película')

    }

})


module.exports = router