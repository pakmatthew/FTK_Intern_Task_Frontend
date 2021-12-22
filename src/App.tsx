import * as style from "./assets/styles/global.style";
import axios from "axios";
import { useEffect, useState } from "react";
import { Task, TaskClickAction } from "./assets/types";
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
import ScreenSize from "./utils";

const App = () => {
  // const [,width] = ScreenSize()
  const [taskData, setTaskData] = useState<Task[]>([]);
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [newTaskName, setNewTaskName] = useState<string>("");
  const [newSeqNumber, setNewSeqNumber] = useState<string>("");
  const [assignedTaskId, setAssignedTaskId] = useState<string>("");

  const fetchTaskData = async () => {
    try {
      const result = await axios.get("/api/tasks");
      let tempTaskSeqNumber: number[] = [];
      if (result.data.length > 0) {
        result.data.map((task: Task) => {
          tempTaskSeqNumber.push(parseInt(task.seqNumber));
        });
        console.log("old SeqNumber = ", tempTaskSeqNumber);
        for (let index = 0; index < tempTaskSeqNumber.length; index++) {
          if (index !== tempTaskSeqNumber.length) {
            if (tempTaskSeqNumber[index] > tempTaskSeqNumber[index + 1]) {
              let tempNumber;
              tempNumber = tempTaskSeqNumber[index + 1];
              tempTaskSeqNumber[index + 1] = tempTaskSeqNumber[index];
              tempTaskSeqNumber[index] = tempNumber;
            }
            if (tempTaskSeqNumber[index] < tempTaskSeqNumber[index - 1]) {
              let tempNumber;
              tempNumber = tempTaskSeqNumber[index - 1];
              tempTaskSeqNumber[index - 1] = tempTaskSeqNumber[index];
              tempTaskSeqNumber[index] = tempNumber;
            }
          }
        }
        console.log("updated SeqNumber = ", tempTaskSeqNumber);
        let updatedTaskData: Task[] = [];
        tempTaskSeqNumber.map((order: number) => {
          result.data.map((task: Task) => {
            if (order === parseInt(task.seqNumber)) {
              updatedTaskData.push(task);
            }
          });
        });
        console.log("updated data = ", updatedTaskData);
        setTaskData(updatedTaskData);
      }
    } catch (e) {
      alert(`can not fetch data, reason: ${JSON.stringify(e)}`);
      console.log("error = ", e);
    }
  };

  useEffect(() => {
    fetchTaskData();
  }, []);

  const ClearAction = () => {
    setIsEdit(false);
    setIsCreate(false);
    setIsDelete(false)
    setTaskData([]);
    setNewTaskName("");
    setNewSeqNumber("");
    setAssignedTaskId("");
  };

  const CreateNewTask = async () => {
    try {
      const newData = {
        name: newTaskName,
        seqNumber: newSeqNumber,
      };
      const result = await axios.post("/api/tasks", newData);
      console.log("status = ", result.status);
      if (result.status === 201) {
        ClearAction();
        fetchTaskData();
      }
    } catch (error) {
      alert(`ERROR: Task cannot be created, reason: ${JSON.stringify(error)}`);
      console.log("error = ", error);
    }
  };

  const handleTaskClickAction = (id: string, action: TaskClickAction) => {
    setAssignedTaskId(id);
    if (action === TaskClickAction.EDIT) setIsEdit(true);
    else if (action === TaskClickAction.DELETE) setIsDelete(true);
  };

  const EditTask = async () => {
    try {
      const newData = {
        name: newTaskName,
        seqNumber: newSeqNumber,
      };
      const result = await axios.patch(
        `/api/tasks/${assignedTaskId}/edit`,
        newData
      );
      console.log("status = ", result.status);
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
      console.log("status = ", result.status);
      if (result.status === 200) {
        ClearAction();
        fetchTaskData();
      }
    } catch (error) {
      alert(`ERROR: Task cannot be deleted, reason: ${JSON.stringify(error)}`);
      console.log("error = ", error);
    }
  };

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
        <div className={style.MainContainerHeader}>
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
        {taskData.map((task: Task, index: number) => {
          return (
            <TaskField
              key={index}
              data={task}
              onClickAction={handleTaskClickAction}
            />
          );
        })}
        {isCreate && (
          <PopUp title="Create New Task" renderOpenPopup={setIsCreate}>
            <FInputField
              label="Task Name"
              value={newTaskName}
              renderValue={setNewTaskName}
            />
            <FInputField
              label="Task Sequence Number"
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
              label="Edit Task Sequence Number"
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
          <PopUp title="Delete Task" renderOpenPopup={setIsDelete}>
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
    </div>
  );
};

export default App;
