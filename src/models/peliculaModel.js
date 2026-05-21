const db = require('../db')

// Obtener los pelicula.
const obtenerPelicula = async() => {
    const sql = 'SELECT * FROM peliculas'

    const [rows] = await db.query(sql)

    return rows
}

//Crear pelicula
const crearPelicula = async (pelicula) => {
    const sql = 'INSERT INTO peliculas(titulo, director, anio, genero) VALUES (?, ?, ?, ?)'

    const [resultado] = await db.query(sql, [pelicula.titulo, pelicula.director, pelicula.anio, pelicula.genero])

    return resultado
}

//Actualizar pelicula
const actualizarPelicula = async  (id, pelicula) => {
    const sql = 'UPDATE peliculas SET titulo = ?, director = ?, anio = ?, genero = ? WHERE id = ?'

    const [resultado] = await db.query(sql, [pelicula.titulo, pelicula.director, pelicula.anio, pelicula.genero, id])

    return resultado
}

//Eliminar pelicula
const eliminarPelicula = async (id) => {
    const sql = 'DELETE FROM peliculas WHERE id = ?'

    const [resultado] = await db.query(sql, [id])

    return resultado
}

module.exports = {
    obtenerPelicula,
    crearPelicula,
    actualizarPelicula,
    eliminarPelicula
}