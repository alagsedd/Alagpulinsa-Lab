import { useColorMode } from "@chakra-ui/react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <div
        style={{
          backgroundColor: `${colorMode === "light" ? "#fefeff" : "#1a212d"}`,
          padding: "0.3rem",
        }}
        className="parent"
      >
        <NavBar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
