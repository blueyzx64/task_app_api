import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_12")
export class TaskCopy12 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy12, (task) => task.tasks, { nullable: true })
	parentId: TaskCopy12;

	@OneToMany(() => TaskCopy12, (task) => task.parentId, { nullable: true })
	tasks: TaskCopy12[];

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
