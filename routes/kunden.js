import { Router } from "express";
import * as kunden from "../controllers/kunden.js";

const router = Router();

router.get("/", kunden.getAll);
router.post("/", kunden.create);

export default router
