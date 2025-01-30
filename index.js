import dotenv from "dotenv";
import express from "express"
import quizRoutes from "./routes/quizRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use('/api/quiz', quizRoutes);

app.listen(PORT, () => {
    console.log(`app listens on ${PORT}`);

});