import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_24")
export class TaskCopy24 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy24, (task) => task.tasks, { nullable: true })
	parentId: TaskCopy24;

	@OneToMany(() => TaskCopy24, (task) => task.parentId, { nullable: true })
	tasks: TaskCopy24[];

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
