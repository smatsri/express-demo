import { Router } from "express";
import * as handlers from "./handlers"

const router = Router()

router.get('/:id', handlers.getById)

export default router