import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_22")
export class TaskCopy22 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy22, (task) => task.tasks, { nullable: true, lazy: true })
	parentId: Promise<TaskCopy22>;

	@OneToMany(() => TaskCopy22, (task) => task.parentId, { nullable: true, lazy: true })
	tasks: Promise<TaskCopy22[]>;

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
