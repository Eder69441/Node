const db = require('../db')

// Obtener los pelicula.
const obtenerPelicula = async() => {
    const sql = 'SELECT * FROM productos'

    const [rows] = await db.query(sql)

    return rows
}

//Crear pelicula
const crearPelicula = async (pelicula) => {
    const sql = 'INSERT INTO productos(nombre, precio) VALUES (?, ?)'

    const [resultado] = await db.query(sql, [pelicula.nombre, pelicula.precio])

    return resultado
}

//Actualizar pelicula
const actualizarPelicula = async  (id, pelicula) => {
    const sql = 'UPDATE productos SET nombre = ?, precio = ? WHERE id = ?'

    const [resultado] = await db.query(sql, [pelicula.nombre, pelicula.precio, id])

    return resultado
}

//Eliminar pelicula
const eliminarPelicula = async (id) => {
    const sql = 'DELETE FROM productos WHERE id = ?'

    const [resultado] = await db.query(sql, [id])

    return resultado
}

module.exports = {
    obtenerPelicula,
    crearPelicula,
    actualizarPelicula,
    eliminarPelicula
}