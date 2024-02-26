import { Router } from "express";

import { getAllPokemons } from "../controllers/pokemon.controller.js"

const router = Router()

router.get('/pokeapi/:urlapi?', getAllPokemons )

export default router

