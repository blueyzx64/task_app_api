import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_9")
export class TaskCopy9 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy9, (task) => task.tasks, { nullable: true, lazy: true })
	parentId: Promise<TaskCopy9>;

	@OneToMany(() => TaskCopy9, (task) => task.parentId, { nullable: true, lazy: true })
	tasks: Promise<TaskCopy9[]>;

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
