import { fetchQuizdata, fetchQuizSubmissionData } from "../utils/fetchData.js";

const generateInsights = async (req, res) => {

    try {

        const submissionData = await fetchQuizSubmissionData();
        const quizData = await fetchQuizdata();



        const responses = submissionData.response_map;
        const correctAnswers = submissionData.correct_answers;
        const incorrectAnswers = submissionData.incorrect_answers;
        const totalQuestions = submissionData.total_questions;


        let topicPerformance = [];
        let difficultyPerformance = { easy: 0, medium: 0, hard: 0 };
        let weakAreas = [];
        let performanceTrends = [];

        quizData.quiz.questions.forEach((qsn) => {
            const { id, topic, difficulty_level, options } = qsn;
            const userResponse = responses[id];

            // Initialize topic if not present
            if (!topicPerformance[topic]) {
                topicPerformance[topic] = { correct: 0, incorrect: 0 };
            }

            // Check user's response against correct options
            const correctOption = options.find(option => option.is_correct);
            if (userResponse === correctOption.description) {
                topicPerformance[topic].correct++;
                difficultyPerformance[difficulty_level]++;
            } else {
                topicPerformance[topic].incorrect++;
            }
        });

        // Identify weak areas based on accuracy threshold
        Object.entries(topicPerformance).forEach(([topic, data]) => {
            const accuracy = (data.correct / (data.correct + data.incorrect)) * 100;
            if (accuracy < 50) {
                weakAreas.push({
                    topic,
                    accuracy: accuracy.toFixed(2) + "%"
                });
            }
        });

        // Track performance trends from previous attempts
        const recentAttempts = submissionData.previous_attempts?.slice(-5) || [];
        recentAttempts.forEach((attempt, index) => {
            performanceTrends.push({
                attempt: `Attempt ${index + 1}`,
                score: attempt.final_score,
                accuracy: ((attempt.correct_answers / attempt.total_questions) * 100).toFixed(2) + "%",
            });
        });

        res.status(200).json({
            totalQuestions,
            correctAnswers,
            incorrectAnswers,
            weakAreas,
            difficultyPerformance,
            performanceTrends
        });

    } catch (err) {

        res.status(500).json({
            message: "Error generating insights",
            error: err.message,
        })

    }
};

export default generateInsights;