import { fetchQuizSubmissionData } from "../utils/fetchData.js";

const analyzePerformance = async (req, res) => {

    try {

        const submissionData = await fetchQuizSubmissionData();

        const totalQuestions = submissionData.total_questions;
        const correctAnswers = submissionData.correct_answers;
        const incorrectAnswers = submissionData.incorrect_answers;

        const accuracy = (correctAnswers / totalQuestions) * 100;


        res.status(200).json({
            totalQuestions,
            correctAnswers,
            incorrectAnswers,
            accuracy: accuracy.toFixed(2) + "%",
            rank: submissionData.rank_text
        });

    } catch (err) {
        res.status(500).json({
            message: "Error analyzing quiz performance",
            error: err.message
        });
    }
}

export default analyzePerformance;