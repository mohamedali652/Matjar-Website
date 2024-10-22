import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import MainLayout from "./LayOut/LayOut";
export const Routing = createBrowserRouter([
{
    path : "/",element: <MainLayout />,children: [{ index: true, element: <Home />,},],}
]);