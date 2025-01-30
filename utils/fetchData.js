import axios from "axios"

const fetchQuizdata = async () => {
    const response = await axios.get(process.env.QUIZ_ENDPOINT)
    const data = response.data
    return data;
}

const fetchQuizSubmissionData = async () => {
    const response = await axios.get(process.env.SUBMISSION_ENDPOINT);
    const data = response.data;
    return data;
}

export { fetchQuizdata, fetchQuizSubmissionData };