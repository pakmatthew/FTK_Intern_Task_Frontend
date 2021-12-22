import { Task, TaskClickAction } from "../../assets/types";


export interface TaskFieldProps{
    data: Task,
    onClickAction: (id: string, action: TaskClickAction) => void
}