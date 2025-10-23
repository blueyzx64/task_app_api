import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_26")
export class TaskCopy26 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy26, (task) => task.tasks, { nullable: true })
	parentId: TaskCopy26;

	@OneToMany(() => TaskCopy26, (task) => task.parentId, { nullable: true })
	tasks: TaskCopy26[];

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
