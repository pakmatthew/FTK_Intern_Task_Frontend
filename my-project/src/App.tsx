import * as style from "./assets/styles/global.style";
import axios from "axios";
import { useEffect, useState } from "react";
import ConfigAxios from "./utils/configAxios";

const App = () => {
  const [taskData, setTaskData] = useState<[]>([]);

  useEffect(() => {
    const fetchTaskData = async () => {
      try {
        const result = await ConfigAxios.get(
          // 'http://3.135.77.77:4000/'
          "/api/tasks"
        );
        setTaskData(result.data);
      } catch (e) {
        console.log("error = ", e);
      }
    };
    fetchTaskData();
  }, []);

  // console.log("task data = ", taskData);

  return (
    <div className={style.AppContainer}>
      {'Hello' + taskData}
    </div>
  )
};

export default App;
