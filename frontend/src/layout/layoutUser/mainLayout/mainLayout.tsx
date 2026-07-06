import { Outlet } from "react-router-dom";
import HeaderUser from "../headerUser/headerUser";
import FooterUser from "../footerUser/footerUser";

const MainLayoutUser = () => {
  return (
    <>
      <HeaderUser />
      <main>
        <Outlet />
      </main>
      <FooterUser />
    </>
  );
};

export default MainLayoutUser;