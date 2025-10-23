import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_3")
export class TaskCopy3 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy3, (task) => task.tasks, { nullable: true })
	parentId: TaskCopy3;

	@OneToMany(() => TaskCopy3, (task) => task.parentId, { nullable: true })
	tasks: TaskCopy3[];

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
