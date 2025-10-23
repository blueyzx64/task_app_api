import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_7")
export class TaskCopy7 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy7, (task) => task.tasks, { nullable: true })
	parentId: TaskCopy7;

	@OneToMany(() => TaskCopy7, (task) => task.parentId, { nullable: true })
	tasks: TaskCopy7[];

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
