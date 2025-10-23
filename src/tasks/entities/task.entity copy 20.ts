import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_20")
export class TaskCopy20 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy20, (task) => task.tasks, { nullable: true })
	parentId: TaskCopy20;

	@OneToMany(() => TaskCopy20, (task) => task.parentId, { nullable: true })
	tasks: TaskCopy20[];

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
