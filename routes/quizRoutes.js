import express from "express";
import analyzePerformance from "../controllers/quiz.controller.js";

const router = express.Router();

router.get("/analyze", analyzePerformance);

export default router