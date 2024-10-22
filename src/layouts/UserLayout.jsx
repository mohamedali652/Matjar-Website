import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../Components/Home/Footer/Footer";
const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainLayout;