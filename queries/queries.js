const {request, response} = require("express");
const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "exameniii",
    password: "123456",
    port: "5432",
})
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const { ci, nombre, primer_apellido, segundo_apellido, fecha_nacimiento } = request.body

    pool.query('INSERT INTO users (ci, nombre, primer_apellido, segundo_apellido, fecha_nacimiento) VALUES ($1, $2, $3, $4, $5)', [ci, nombre, primer_apellido, segundo_apellido, fecha_nacimiento], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Usuario añadido`)
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { ci, nombre, primer_apellido, segundo_apellido, fecha_nacimiento } = request.body

    pool.query(
        'UPDATE users SET ci = $1, nombre = $2, primer_apellido = $3, segundo_apellido = $4, fecha_nacimiento = $5 WHERE id = $6',
        [ci, nombre, primer_apellido, segundo_apellido, fecha_nacimiento, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Usuario modficado con ID: ${id}`)
        }
    )
}
const getPromedioEdad = (request, response) => {
    pool.query('SELECT AVG(EXTRACT(YEAR FROM AGE(NOW(),fecha_nacimiento))) AS promedio_edades FROM users', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getEstado = (request, response) => {
    response.status(200).json({ nameSystem: 'api-users', version: "0.0.1", developer: "Angel Nayib Espinoza Ibañez", email: "angelgabrielespinozaibanez9@gmail.com"})
}
const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Usuario eliminado con ID: ${id}`)
    })
}


module.exports = {
    getUsers,
    getEstado,
    getPromedioEdad,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}