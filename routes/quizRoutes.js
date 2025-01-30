import express from "express";
import analyzePerformance from "../controllers/quiz.controller.js";
import predictRank from "../controllers/predictRank.controller.js";

const router = express.Router();

router.get("/analyze", analyzePerformance);
router.get("/predict-rank", predictRank);

export default router