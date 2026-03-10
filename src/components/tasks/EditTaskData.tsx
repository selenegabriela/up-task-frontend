import { useLocation } from "react-router-dom"

const EditTaskData = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const taskId = queryParams.get('editTask');

    console.log(taskId);
  return (
    <div>EditTaskData</div>
  )
}

export default EditTaskData