import { model } from "mongoose";
import taskSchema from "./schemas.js";

let connection
export default class TaskDAO{
    static async injectDB(conn)
    {
        if(connection){
            return
        }
        try {
            
        connection = conn;
        console.log("connected successfully!")
        } catch (e) {
            console.error(e)
            process.exit(1)
        }
    }

static async createTask(tito, descript, date)
{
    await connection;
    const Task = new model('Task', taskSchema);

    try {
        const theTask = new Task({
            title: tito,
            description: descript,
            date: date,
            completion: false
        })
        await theTask.save();
        console.log("task saved successfully")
        return({status: "saved successfully"});
    } catch (e) {
        console.error(e)
        return({status: "error creating the task"});
    }

}


static async getTasks()
{
    await connection;
    const Task = new model('Task', taskSchema);

    try {
        let tasks = await Task.find({});
        console.log(tasks)
        return(tasks)
    } catch (e) {
        console.error(e)
        return([eroor])
    }

}
}