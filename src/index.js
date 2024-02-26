import app from './app.js'
import axios from 'axios';

    const port = 3000

    app.get('/', (req, res) => {
        res.send('Hello World!xY')
    })    
    
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`)
    })