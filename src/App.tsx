import * as style from "./assets/styles/global.style";
import axios from "axios";
import { useEffect, useState } from "react";
import { Task } from "./assets/types";

const App = () => {
  const [taskData, setTaskData] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTaskData = async () => {
      try {
        const result = await axios.get("/api/tasks");
        setTaskData(result.data);
      } catch (e) {
        alert(`can not create, reason: ${JSON.stringify(e)}`);
        console.log("error = ", e);
      }
    };
    fetchTaskData();
  }, []);

  // console.log("task data = ", taskData);

  return (
    <div className={style.AppContainer}>
      {taskData.map((e) => {
        return <div>{e.title}</div>;
      })}
    </div>
  );
};

export default App;
