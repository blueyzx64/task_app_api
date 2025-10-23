import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_21")
export class TaskCopy21 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy21, (task) => task.tasks, { nullable: true, lazy: true })
	parentId: Promise<TaskCopy21>;

	@OneToMany(() => TaskCopy21, (task) => task.parentId, { nullable: true, lazy: true })
	tasks: Promise<TaskCopy21[]>;

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
