import { Task, TaskClickAction } from "../../assets/types";


export interface TaskFieldProps{
    data: Task,
    onClickAction: (
        data: Task,
        action: TaskClickAction,
        ) => void
}