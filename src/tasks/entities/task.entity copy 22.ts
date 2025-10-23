import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_22")
export class TaskCopy22 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy22, (task) => task.tasks, { nullable: true })
	parentId: TaskCopy22;

	@OneToMany(() => TaskCopy22, (task) => task.parentId, { nullable: true })
	tasks: TaskCopy22[];

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
