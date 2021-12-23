import * as style from "./assets/styles/global.style";
import axios from "axios";
import { useEffect, useState } from "react";
import { Task, TaskClickAction, TaskStatus } from "./assets/types";
import { TaskField } from "./components/taskField";
import {
  FBottomNavigation,
  FButton,
  FInputField,
  FStyledText,
} from "@fantaskticedtechlimited/fantasktic-comp-library";
import {
  FontTypes,
  ColorTypes,
} from "@fantaskticedtechlimited/fantasktic-comp-library/lib/esm/types";
import { PopUp } from "./components/popUp";

const App = () => {
  const [newTaskData, setNewTaskData] = useState<Task[]>([]);
  const [completedTaskData, setCompletedTaskData] = useState<Task[]>([])
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [newTaskName, setNewTaskName] = useState<string>("");
  const [newSeqNumber, setNewSeqNumber] = useState<string>("");
  const [assignedTaskId, setAssignedTaskId] = useState<string>("");
  const [newTaskStatus, setNewTaskStatus] = useState<TaskStatus>(TaskStatus.NEW)

  const fetchTaskData = async () => {
    try {
      const result = await axios.get("/api/tasks");
      let tempNewTaskSeqNumber: number[] = [];
      let tempCompletedTaskSeqNumber: number[] = [];
      if (result.data.length > 0) {
        result.data.map((task: Task) => {
          if(task.status === TaskStatus.NEW)
            tempNewTaskSeqNumber.push(task.seqNumber);
          if(task.status === TaskStatus.COMPLETE)
            tempCompletedTaskSeqNumber.push(task.seqNumber)
        });
        for (let index = 0; index < tempNewTaskSeqNumber.length; index++) {
          if (index !== tempNewTaskSeqNumber.length) {
            if (tempNewTaskSeqNumber[index] > tempNewTaskSeqNumber[index + 1]) {
              let tempNumber;
              tempNumber = tempNewTaskSeqNumber[index + 1];
              tempNewTaskSeqNumber[index + 1] = tempNewTaskSeqNumber[index];
              tempNewTaskSeqNumber[index] = tempNumber;
            }
            if (tempNewTaskSeqNumber[index] < tempNewTaskSeqNumber[index - 1]) {
              let tempNumber;
              tempNumber = tempNewTaskSeqNumber[index - 1];
              tempNewTaskSeqNumber[index - 1] = tempNewTaskSeqNumber[index];
              tempNewTaskSeqNumber[index] = tempNumber;
            }
          }
        }
        for (let index = 0; index < tempCompletedTaskSeqNumber.length; index++) {
          if (index !== tempCompletedTaskSeqNumber.length) {
            if (tempCompletedTaskSeqNumber[index] > tempCompletedTaskSeqNumber[index + 1]) {
              let tempNumber;
              tempNumber = tempCompletedTaskSeqNumber[index + 1];
              tempCompletedTaskSeqNumber[index + 1] = tempCompletedTaskSeqNumber[index];
              tempCompletedTaskSeqNumber[index] = tempNumber;
            }
            if (tempCompletedTaskSeqNumber[index] < tempCompletedTaskSeqNumber[index - 1]) {
              let tempNumber;
              tempNumber = tempCompletedTaskSeqNumber[index - 1];
              tempCompletedTaskSeqNumber[index - 1] = tempCompletedTaskSeqNumber[index];
              tempCompletedTaskSeqNumber[index] = tempNumber;
            }
          }
        }
        let updatedNewTaskData: Task[] = [];
        let updatedCompletedTaskData: Task[] = [];
        tempNewTaskSeqNumber.map((order: number) => {
          result.data.map((task: Task) => {
            if (order === task.seqNumber) {
              updatedNewTaskData.push(task);
            }
          });
        });        
        tempCompletedTaskSeqNumber.map((order: number) => {
          result.data.map((task: Task) => {
            if (order === task.seqNumber) {
              updatedCompletedTaskData.push(task);
            }
          });
        });
        setNewTaskData(updatedNewTaskData);
        setCompletedTaskData(updatedCompletedTaskData);
      }
    } catch (e) {
      alert(`Data cannot be fetched, reason: ${JSON.stringify(e)}`);
      console.log("error = ", e);
    }
  };

  useEffect(() => {
    fetchTaskData();
  }, []);

  const ClearAction = () => {
    setIsEdit(false);
    setIsCreate(false);
    setIsDelete(false);
    setNewTaskData([]);
    setCompletedTaskData([])
    setNewTaskName("");
    setNewSeqNumber("");
    setAssignedTaskId("");
  };

  const CreateNewTask = async () => {
    try {
      const newData = {
        name: newTaskName,
        seqNumber: parseInt(newSeqNumber),
      };
      const result = await axios.post("/api/tasks", newData);
      if (result.status === 201) {
        ClearAction();
        fetchTaskData();
      }
    } catch (error) {
      if(newTaskName === "")
        alert("Error: No name input.")
      else if(newSeqNumber === "")
        alert("Error: No Sequence Number input.")
      else alert(`ERROR: Task cannot be created, reason: ${JSON.stringify(error)}`);
      console.log("error = ", error);
    }
  };

  const EditTask = async () => {
    try {
      const newData = {
        name: newTaskName,
        seqNumber: parseInt(newSeqNumber),
        status: newTaskStatus
      }
      const result = await axios.patch(
        `/api/tasks/${assignedTaskId}/edit`,
        newData
      );
      console.log("HELLO")
      if (result.status === 200) {
        ClearAction();
        fetchTaskData();
      }
    } catch (error) {
      alert(`ERROR: Task cannot be edited, reason: ${JSON.stringify(error)}`);
      console.log("error = ", error);
    }
  };

  const DeleteTask = async () => {
    try {
      const result = await axios.delete(`/api/tasks/${assignedTaskId}`);
      if (result.status === 200) {
        ClearAction();
        fetchTaskData();
      }
    } catch (error) {
      alert(`ERROR: Task cannot be deleted, reason: ${JSON.stringify(error)}`);
      console.log("error = ", error);
    }
  };

  const handleTaskClickAction = (
    data: Task, 
    action: TaskClickAction
  ) => {
    setAssignedTaskId(data.id);
    if (action === TaskClickAction.EDIT) setIsEdit(true);
    else if (action === TaskClickAction.DELETE) setIsDelete(true);
    else {
      setNewTaskName(data.name)
      setNewSeqNumber(data.seqNumber.toString())
      setNewTaskStatus(
        action === TaskClickAction.NEW ?
          TaskStatus.NEW : TaskStatus.COMPLETE
      )
    }
  };

  useEffect(() => {
    if(
      assignedTaskId !== "" &&
      isEdit !== true &&
      isDelete !== true
    ){
      EditTask()
    }
  }, [assignedTaskId, newTaskStatus])

  return (
    <div className={style.AppContainer}>
      <div className={style.HeaderContainer}>
        <FStyledText
          font={FontTypes.H5}
          color={ColorTypes.BLACK}
          children="My Tasks"
        />
      </div>
      <div className={style.MainContainer}>
        <div className={style.NewTaskContainer}>
          <div className={style.NewTaskContainerHeader}>
            <FStyledText
              font={FontTypes.M16}
              color={ColorTypes.BRAND}
              children="Plan to do:"
            />
            <FButton
              type="primary"
              onClick={() => setIsCreate(true)}
              children="Add new task"
            />
          </div>
          {newTaskData.map((task: Task, index: number) => {
            return (
              <TaskField
                key={index}
                data={task}
                onClickAction={handleTaskClickAction}
              />
            );
          })}
        </div>
        {isCreate && (
          <PopUp title="Create New Task" renderOpenPopup={setIsCreate}>
            <FInputField
              label="Task Name"
              value={newTaskName}
              renderValue={setNewTaskName}
            />
            <FInputField
              label="Sequence Number"
              value={newSeqNumber}
              renderValue={setNewSeqNumber}
            />
            <FBottomNavigation
              leadingButtonName="Cancel"
              actionButtonName="Confirm"
              actionButtonColor={ColorTypes.GREEN}
              onLeadingButtonClick={() => setIsCreate(false)}
              onActionButtonClick={CreateNewTask}
            />
          </PopUp>
        )}
        {isEdit && (
          <PopUp title="Edit Task Info" renderOpenPopup={setIsEdit}>
            <FInputField
              label="Edit Task Name"
              value={newTaskName}
              renderValue={setNewTaskName}
            />
            <FInputField
              label="Edit Sequence Number"
              value={newSeqNumber}
              renderValue={setNewSeqNumber}
            />
            <FBottomNavigation
              leadingButtonName="Cancel"
              actionButtonName="Confirm"
              actionButtonColor={ColorTypes.BRAND}
              onLeadingButtonClick={() => setIsEdit(false)}
              onActionButtonClick={EditTask}
            />
          </PopUp>
        )}
        {isDelete && (
          <PopUp title="Delete this task?" renderOpenPopup={setIsDelete}>
            <FBottomNavigation
              leadingButtonName="Cancel"
              actionButtonName="Confirm"
              actionButtonColor={ColorTypes.RED}
              onLeadingButtonClick={() => setIsDelete(false)}
              onActionButtonClick={DeleteTask}
            />
          </PopUp>
        )}
      </div>
      <div className={style.CompletedTaskContainer}> 
        <FStyledText
          font={FontTypes.B16}
          color={ColorTypes.PUREWHITE}
          align="center"
          children="I have completed:"
        />   
        {completedTaskData.map((task: Task, index: number) => {
          return (
            <TaskField
              key={index}
              data={task}
              onClickAction={handleTaskClickAction}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
