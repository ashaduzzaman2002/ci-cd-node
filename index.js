import express from 'express'

const app = express()

app.get('/', (req, res) => res.send('Hello World'))
app.get('/health', (req, res) => res.send('Health'))

app.listen(8000, () => console.log('Server is running on port 8000'))