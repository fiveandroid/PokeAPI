import express from "express";
import pokemonRoutes from "./routes/pokemon.routes.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use( pokemonRoutes )

export default app