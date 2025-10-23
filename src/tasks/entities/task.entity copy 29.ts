import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_29")
export class TaskCopy29 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy29, (task) => task.tasks, { nullable: true })
	parentId: TaskCopy29;

	@OneToMany(() => TaskCopy29, (task) => task.parentId, { nullable: true })
	tasks: TaskCopy29[];

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
