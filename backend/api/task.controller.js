import TaskDAO from "../taskDAO.js";

export default class TaskController{
    static async apiCreateTask(req,res)
    {
        let title = req.query.title;
        let description = req.query.description;
        let date = req.body.date;

        try {
            let response = await TaskDAO.createTask(title, description, date)
            res.json(response);
            console.log(response)
        } catch (e) {
            console.error(e);
            process.exit(1)
        }
    }

    static async apiGetTasks(req,res)
    {
        try {
            let tasklist = await TaskDAO.getTasks();
            let response = {
                tasks: tasklist
            }
            res.json(response)
        } catch (e) {
            console.error(e)

        }
    }
}