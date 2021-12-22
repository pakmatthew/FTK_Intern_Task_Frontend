export interface Task{
  id: string;
  name: string;
  seqNumber: number;
  status: TaskStatus
}

export enum TaskStatus{
  NEW = 'NEW',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETE = 'COMPLETE'
}

export enum TaskClickAction {
  DELETE = "DELETE",
  EDIT = "EDIT",
  COMPLETE = "COMPLETE",
}
