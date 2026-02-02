import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import DashbordView from "@/views/DashbordView";
import CreateProjectView from "./views/projects/CreateProjectView";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<DashbordView />} />
          <Route path='/projects/create' element={<CreateProjectView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
