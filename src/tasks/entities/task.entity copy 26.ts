import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_26")
export class TaskCopy26 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy26, (task) => task.tasks, { nullable: true, lazy: true })
	parentId: Promise<TaskCopy26>;

	@OneToMany(() => TaskCopy26, (task) => task.parentId, { nullable: true, lazy: true })
	tasks: Promise<TaskCopy26[]>;

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
