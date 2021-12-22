import { Task, TaskClickAction } from "../../assets/types";


export interface TaskFieldProps{
    data: Task,
    onClickAction: (action: TaskClickAction) => void
}