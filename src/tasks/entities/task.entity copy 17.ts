import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_17")
export class TaskCopy17 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy17, (task) => task.tasks, { nullable: true, lazy: true })
	parentId: Promise<TaskCopy17>;

	@OneToMany(() => TaskCopy17, (task) => task.parentId, { nullable: true, lazy: true })
	tasks: Promise<TaskCopy17[]>;

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
