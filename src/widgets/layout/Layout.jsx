import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { DashboardNavbar } from "./dashboard-navbar";
export default function Layout() {
  const { pathname } = useLocation();
  return (
    <div>
      {/* <DashboardNavbar /> */}
      <Outlet />
    </div>
  );
}
