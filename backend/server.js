import express from 'express';
import cors from 'cors';
import router from './data.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/v1/todo", router);
app.use("*",(req,res)=>{
    res.status(404).json({error: "not found"})
});

export default app;