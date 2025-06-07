import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll(@Query('userId', new ValidationPipe()) userId: number) {
    return this.tasksService.findAll(userId);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Query('userId', new ValidationPipe()) userId: number
  ) {
    return this.tasksService.findOne(+id, userId);
  }

  @Patch(':id')
  update(@Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
    @Query('userId', new ValidationPipe()) userId: number
  ) {
    return this.tasksService.update(+id, updateTaskDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string,
    @Query('userId', new ValidationPipe()) userId: number
  ) {
    return this.tasksService.remove(+id, userId);
  }
}
