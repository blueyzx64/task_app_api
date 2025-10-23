import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from "./entities/task.entity";
import { TaskCopy } from "./entities/task.entity copy";
import { TaskCopy2 } from "./entities/task.entity copy 2";
import { TaskCopy3 } from "./entities/task.entity copy 3";
import { TaskCopy4 } from "./entities/task.entity copy 4";
import { TaskCopy5 } from "./entities/task.entity copy 5";
import { TaskCopy6 } from "./entities/task.entity copy 6";
import { TaskCopy7 } from "./entities/task.entity copy 7";
import { TaskCopy8 } from "./entities/task.entity copy 8";
import { TaskCopy9 } from "./entities/task.entity copy 9";
import { TaskCopy10 } from "./entities/task.entity copy 10";
import { TaskCopy11 } from "./entities/task.entity copy 11";
import { TaskCopy12 } from "./entities/task.entity copy 12";
import { TaskCopy13 } from "./entities/task.entity copy 13";
import { TaskCopy14 } from "./entities/task.entity copy 14";
import { TaskCopy15 } from "./entities/task.entity copy 15";
import { TaskCopy16 } from "./entities/task.entity copy 16";
import { TaskCopy17 } from "./entities/task.entity copy 17";
import { TaskCopy18 } from "./entities/task.entity copy 18";
import { TaskCopy19 } from "./entities/task.entity copy 19";
import { TaskCopy20 } from "./entities/task.entity copy 20";
import { TaskCopy21 } from "./entities/task.entity copy 21";
import { TaskCopy22 } from "./entities/task.entity copy 22";
import { TaskCopy23 } from "./entities/task.entity copy 23";
import { TaskCopy24 } from "./entities/task.entity copy 24";
import { TaskCopy25 } from "./entities/task.entity copy 25";
import { TaskCopy26 } from "./entities/task.entity copy 26";
import { TaskCopy27 } from "./entities/task.entity copy 27";
import { TaskCopy28 } from "./entities/task.entity copy 28";
import { TaskCopy29 } from "./entities/task.entity copy 29";
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task, TaskCopy, TaskCopy2, TaskCopy3, TaskCopy4, TaskCopy5, TaskCopy6, TaskCopy7, TaskCopy8, TaskCopy9, TaskCopy10, TaskCopy11, TaskCopy12, TaskCopy13, TaskCopy14, TaskCopy15, TaskCopy16, TaskCopy17, TaskCopy18, TaskCopy19, TaskCopy20, TaskCopy21, TaskCopy22, TaskCopy23, TaskCopy24, TaskCopy25, TaskCopy26, TaskCopy27, TaskCopy28, TaskCopy29])
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule { }
