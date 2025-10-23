import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_6")
export class TaskCopy6 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy6, (task) => task.tasks, { nullable: true, lazy: true })
	parentId: Promise<TaskCopy6>;

	@OneToMany(() => TaskCopy6, (task) => task.parentId, { nullable: true, lazy: true })
	tasks: Promise<TaskCopy6[]>;

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
