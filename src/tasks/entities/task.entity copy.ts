import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy")
export class TaskCopy {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy, (task) => task.tasks, { nullable: true, lazy: true })
	parentId: Promise<TaskCopy>;

	@OneToMany(() => TaskCopy, (task) => task.parentId, { nullable: true, lazy: true })
	tasks: Promise<TaskCopy[]>;

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
