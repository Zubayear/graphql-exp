import express from 'express'

const app = express()

app.get('/', (req, resp) => {
    resp.send('GraphQL...')
});

app.listen(9000, () => console.log('Listening on port 9000'));