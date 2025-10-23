import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_28")
export class TaskCopy28 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy28, (task) => task.tasks, { nullable: true, lazy: true })
	parentId: Promise<TaskCopy28>;

	@OneToMany(() => TaskCopy28, (task) => task.parentId, { nullable: true, lazy: true })
	tasks: Promise<TaskCopy28[]>;

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
