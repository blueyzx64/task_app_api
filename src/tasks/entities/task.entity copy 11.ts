import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_11")
export class TaskCopy11 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy11, (task) => task.tasks, { nullable: true })
	parentId: TaskCopy11;

	@OneToMany(() => TaskCopy11, (task) => task.parentId, { nullable: true })
	tasks: TaskCopy11[];

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
