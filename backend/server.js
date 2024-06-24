import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3005, () =>{
    console.log("App is listening on port 3005")
});

export default app;