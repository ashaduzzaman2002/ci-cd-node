import express from 'express'

const app = express()

app.get('/', (req, res) => res.send('Hello Server'))
app.get('/health', (req, res) => res.send('Hello Health'))

app.listen(8000, () => console.log('Server is running on port 8000'))