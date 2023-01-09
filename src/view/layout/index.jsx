import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "components/NavBar";
import Sidebar from "components/Sidebar";

const Layout = () => {
  const isNonMobile = useMediaQuery("min-width: 600px");
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="25px"
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <Box>
        <NavBar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
