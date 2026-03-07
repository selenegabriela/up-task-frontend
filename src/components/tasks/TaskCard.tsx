import type { Task } from "@/types/index"

type TaskCardProps = {
    task: Task
}

const TaskCard = ({task}: TaskCardProps) => {
    console.log(task);
  return (
    <div>TaskCard</div>
  )
}

export default TaskCard