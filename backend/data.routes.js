import express, { Router } from 'express'
import TaskController from './api/task.controller.js';

const router = express.Router();
router.route("/").get(TaskController.apiGetTasks);
router.route("/add").post(TaskController.apiCreateTask)
export default router;