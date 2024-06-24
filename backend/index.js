import app from "./server.js";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import TaskDAO from "./taskDAO.js";

async function main()
{
    dotenv.config();
    const client = mongoose.connect(process.env.TODO_DB_URI);
    const port = process.env.PORT;

    try {
        await TaskDAO.injectDB(client)
        app.listen(port, ()=>{
            console.log(`app is listening on port:  ${port}`)
        })
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

main();