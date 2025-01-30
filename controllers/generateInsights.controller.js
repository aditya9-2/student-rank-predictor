import { fetchQuizdata, fetchQuizSubmissionData } from "../utils/fetchData";

const generateInsights = async (req, res) => {

    try {

        const submissionData = await fetchQuizSubmissionData();
        const quizData = await fetchQuizdata();

        const responses = submissionData.response_map;
        const correctAnswers = submissionData.correct_answers;
        const incorrectAnswers = submissionData.incorrect_answers;
        const totalQuestions = submissionData.total_questions;


        let topicPerformance = [];
        let dificultyPerformance = { easy: 0, medium: 0, hard: 0 };
        let weakAreas = [];
        let performanceTrends = [];

        quizData.questions.forEach((qsn) => {
            const { id, topic, difficulty, correct_option } = qsn;
            const userResponse = responses[id];

            // todo 
            //  Need to track performance per topic
        })

    } catch (err) {

        res.status(500).json({
            message: "Error generating insights",
            error: err.message,
        })

    }
};

export default generateInsights;