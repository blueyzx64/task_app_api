import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_17")
export class TaskCopy17 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy17, (task) => task.tasks, { nullable: true })
	parentId: TaskCopy17;

	@OneToMany(() => TaskCopy17, (task) => task.parentId, { nullable: true })
	tasks: TaskCopy17[];

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
