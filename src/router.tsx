import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import DashbordView from "@/views/DashbordView";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<DashbordView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
