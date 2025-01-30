import { fetchQuizSubmissionData } from "../utils/fetchData.js";

const predictRank = async (req, res) => {

    try {

        const submissionData = await fetchQuizSubmissionData();
        const score = submissionData.final_score;

        // or we can take score from user 

        let predictedRank;

        if (score >= 700) predictedRank = Math.floor(Math.random() * 100) + 1; // Rank 1-100
        else if (score >= 650) predictedRank = Math.floor(Math.random() * 400) + 101; // 101-500
        else if (score >= 600) predictedRank = Math.floor(Math.random() * 1500) + 501; // 501-2000
        else if (score >= 550) predictedRank = Math.floor(Math.random() * 8000) + 2001; // 2001-10000
        else if (score >= 500) predictedRank = Math.floor(Math.random() * 40000) + 10001; // 10001-50000
        else if (score >= 400) predictedRank = Math.floor(Math.random() * 100000) + 50001; // 50001-150000
        else if (score >= 300) predictedRank = Math.floor(Math.random() * 150000) + 150001; // 150001-300000
        else if (score >= 200) predictedRank = Math.floor(Math.random() * 200000) + 300001; // 300001-500000
        else if (score >= 100) predictedRank = Math.floor(Math.random() * 300000) + 500001; // 500001-800000
        else predictedRank = Math.floor(Math.random() * 200000) + 800001; // 800001+

        res.status(200).json({
            score,
            predictedRank
        });

    } catch (error) {
        res.status(500).json({
            message: "Error Predicting rank",
            error: error.message
        });
    }
}

export default predictRank;


/*
// I calulate this based on this NEET rank chart
NEET Score	Expected Rank Range
720 – 700	1 – 100
699 – 650	101 – 500
649 – 600	501 – 2,000
599 – 550	2,001 – 10,000
549 – 500	10,001 – 50,000
499 – 400	50,001 – 1,50,000
399 – 300	1,50,001 – 3,00,000
299 – 200	3,00,001 – 5,00,000
199 – 100	5,00,001 – 8,00,000
Below 100	8,00,001+

*/