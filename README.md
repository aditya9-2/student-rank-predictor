# Student Rank Predictor and Performance Analyzer

## Overview

This project aims to predict NEET (National Eligibility cum Entrance Test) ranks for students based on their quiz performance and previous year NEET exam results. It also provides insights into their quiz performance, such as identifying weak areas, trends in performance, and accuracy by topic and difficulty level.

The project exposes three primary API routes:

- **Analyze Performance:** Analyzes a student's quiz performance.

- **Predict Rank:** Predicts the student's NEET rank based on their quiz score.

- **Generate Insights:** Provides insights on the student's performance, including weak areas and trends.

## Approach

1. **Data Analysis:** The system analyzes the student's performance by topics, difficulty levels, and accuracy in responses.

2. **Rank Prediction:** A probabilistic model estimates the student's NEET rank based on their quiz score.

3. **Insight Generation:** The system identifies weak areas, performance trends, and accuracy gaps.

## API Routes

The application exposes the following API routes:

1. **Analyze Performance**

**Route:** `/api/v1/quiz/analyze`

**Method:** `GET`

**Description:** Analyzes the student's quiz performance and returns statistics like total questions, correct answers, incorrect answers, and performance by topics and difficulty levels.

2. **Predict Rank**

**Route:** `/api/v1/quiz/predict-rank`

**Method:** `GET`

**Description:** Predicts the student's NEET rank based on their quiz score.

3. **Generate Insights**

**Route:** `/api/v1/quiz/generate-insights`

**Method:** `GET`

**Description:** Provides insights into the student's performance, such as weak areas, trends in performance, and performance by difficulty level.

## Setup Instructions

1. **Clone the Repository**

```
git clone https://github.com/aditya9-2/student-rank-predictor.git
```

2. **Navigate to the Project Directory**

```
cd student-rank-predictor
```

3. **Install Dependencies**

```
npm install
```

4. **Set Up Environment Variables**

- Create a `.env` file in the root of the project directory and define the following variables:

```
PORT=
API_BASE=""
QUIZ_ENDPOINT=""
SUBMISSION_ENDPOINT=""
```

4. **Start the server in dev mode**

```
npm run dev
```

## Screenshots of routes

### Analyze Performance

[![analyze.jpg](https://i.postimg.cc/bYDYKKMt/analyze.jpg)](https://postimg.cc/PNHkDFdX)

### Predict Rank

[![predict-rank.jpg](https://i.postimg.cc/2S2fqwMY/predict-rank.jpg)](https://postimg.cc/k26Hzx7Y)

### Generate Insights

[![insights.jpg](https://i.postimg.cc/CK2T7Kw6/insights.jpg)](https://postimg.cc/WD0HbTFM)
