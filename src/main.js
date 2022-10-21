import express from 'express'
import { pool } from './db.js'
import { PORT } from './config.js'

const app = express()

app.get('/', async (req, res) => {
    const [result] = await pool.query('SELECT * FROM products')
    res.send(result)
})

app.get('/create', async (req, res) => {
    const result = await pool.query('INSERT INTO products(descripcion) VALUES ("des 1")')
    res.send(result)
})

app.listen(PORT)
console.log('Run!!')