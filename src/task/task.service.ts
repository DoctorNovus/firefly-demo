import { Injectable } from "@outwalk/firefly";
import { Task } from "./task.entity";

@Injectable()
export class TaskService {
  tasks = ["task 1", "task 2", "task 3"];

  async getTasks() {
    return this.tasks;
  }

  async getTaskById(id) {
    return await Task.find({ name: id }).exec();
  }
}
