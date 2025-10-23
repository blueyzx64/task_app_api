import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_14")
export class TaskCopy14 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy14, (task) => task.tasks, { nullable: true })
	parentId: TaskCopy14;

	@OneToMany(() => TaskCopy14, (task) => task.parentId, { nullable: true })
	tasks: TaskCopy14[];

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
