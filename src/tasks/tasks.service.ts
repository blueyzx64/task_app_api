import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from "./entities/task.entity";

@Injectable()
export class TasksService {

  user: { name: string, id: number; };

  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>
  ) {

    this.user = { id: 112, name: "sila" };
  }

  async create(createTaskDto: CreateTaskDto) {

    console.log("dto:::", createTaskDto);

    let taskParent: Task | null = null;
    if (createTaskDto.parentId) {
      taskParent = await this.taskRepository.findOneBy({ id: createTaskDto.parentId });

    }

    const { parentId, ...extractedDto } = createTaskDto;


    const taskToSave = this.taskRepository.create(extractedDto);

    // taskToSave.userId = this.id;

    if (taskParent) {
      taskToSave.parentId = Promise.resolve(taskParent);
    }

    const savedTask = await this.taskRepository.save(taskToSave);

    return savedTask;
  }

  async findAll(userId: number) {
    if (!userId) {
      throw new BadRequestException("No userid specified");
    }

    const tasks = await this.taskRepository.find({
      where: {
        userId
      }
      // Relations are lazy-loaded, no need to specify relations
    });
    return tasks;
  }

  async findOne(id: number, userId: number) {

    if (!userId) {
      throw new BadRequestException("No userid specified");
    }

    const task = await this.taskRepository.findOne({
      where: {
        id,
        userId
      }
      // Relations are lazy-loaded, no need to specify relations
    });

    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto, userId: number) {

    if (!userId) {
      throw new BadRequestException("No userid specified");
    }
    const savedTask = await this.findOne(id, userId);

    if (!savedTask) {
      throw new NotFoundException("Task doesnt exist");
    }

    const { parentId, ...newUpdateTaskDto } = updateTaskDto;

    const taskToUpdate = this.taskRepository.merge(savedTask, newUpdateTaskDto);

    const updatedTask = await this.taskRepository.save(taskToUpdate);

    return updateTaskDto;
  }

  async remove(id: number, userId: number) {
    if (!userId) {
      throw new BadRequestException("No userid specified");
    }

    const savedTask = await this.findOne(id, userId);

    if (!savedTask) {
      return `This action removes a #${id} task`;
    }
    await this.taskRepository.remove(savedTask);

    return `This action removes a #${id} task`;
  }
}
