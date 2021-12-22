export interface Task{
  id: string;
  name: string;
  seqNumber: number;
  status: TaskStatus
}

export enum TaskStatus{
  NEW = 'NEW',
  COMPLETE = 'COMPLETE'
}

export enum TaskClickAction {
  DELETE = "DELETE",
  EDIT = "EDIT",
  NEW = 'NEW',
  COMPLETE = "COMPLETE",
}
