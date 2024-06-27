import { Outlet } from "react-router-dom";

import MainHeader from "../components/main-header";

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;
