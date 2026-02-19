import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { getProjectById } from "@/api/ProjectApi";


const EditProjectView = () => {
    const params = useParams();
    const projectId = params.projectId!;

    const { data, isLoading } = useQuery({
        queryKey: ['editProject', projectId],
        queryFn: () => getProjectById(projectId),
        retry: false
    })

    console.log(data, isLoading);
  return (
    <div>EditProjectView</div>
  )
}

export default EditProjectView