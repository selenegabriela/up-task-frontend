import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import DashbordView from "@/views/DashbordView";
import CreateProjectView from "@/views/projects/CreateProjectView";
import EditProjectView from "./views/projects/EditProjectView";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<DashbordView />} />
          <Route path='/projects/create' element={<CreateProjectView />} />
          <Route path='/projects/:projectId/edit' element={<EditProjectView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
