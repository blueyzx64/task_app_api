import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_16")
export class TaskCopy16 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy16, (task) => task.tasks, { nullable: true, lazy: true })
	parentId: Promise<TaskCopy16>;

	@OneToMany(() => TaskCopy16, (task) => task.parentId, { nullable: true, lazy: true })
	tasks: Promise<TaskCopy16[]>;

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
