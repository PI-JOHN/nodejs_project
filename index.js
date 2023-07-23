import express from 'express';

const PORT = 5000;

const app = express();

app.use(express.json())

app.post('/', (req,res) => {
    console.log(req.body)
    res.status(200).json('Сервер работает123')
})

async function startApp() {
    try {
        app.listen(PORT, () => {
            console.log('SERVER WORK')
        })
    }
    catch (e) {
        console.log(e)
    }
}

startApp()

