import { useLocation, Link } from "react-router-dom";
import React, { useState, useEffect} from "react";
import { getMethod } from "@/service/auth";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
} from "@material-tailwind/react";
import { UserCircleIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { useMaterialTailwindController, setOpenSidenav } from "@/context";
import SignOut from "./SignOut";

export function DashboardNavbar() {
  
  const [fullname, setFullname] = React.useState("");
  React.useEffect(() => {
    getMethod.GetUser().then((res) => {
      setFullname(res.data.data.fullname);
    });
    var fullname = 'User';
  }, []);
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page, page2] = pathname.split("/").filter((el) => el !== "");

  return (
    <Navbar
      color={fixedNavbar ? "transparent" : "white"}
      className={`w-full rounded-xl transition-all ${
        fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5 "
          : "sticky z-40 px-4 py-1 shadow-md shadow-blue-gray-500/5"
      }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumbs
            className={`bg-transparent p-0 transition-all ${
              fixedNavbar ? "mt-1" : ""
            }`}
          >
            <Link to={`/${layout}`}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
              >
                {layout}
              </Typography>
            </Link>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {page}
            </Typography>
          </Breadcrumbs>
          <Typography variant="h6" color="blue-gray">
            {page2 ? page2 : page}
          </Typography>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/auth/home">
            <IconButton variant="text" color="blue-gray">
              <img
                src="https://4.bp.blogspot.com/-hVKO2rXc7TY/UQvFrX6l0QI/AAAAAAAAMYA/rQ8YJoAYtWA/s1600/LOGO+UNIVERSITAS+JAMBI.png"
                alt="universitas jambi"
              />
            </IconButton>
          </Link>
            <Button
              variant="text"
              color="blue-gray"
              className="hidden items-center gap-1 px-4 xl:flex"
            >
              <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
              {fullname} 
            </Button>
            <IconButton
              variant="text"
              color="blue-gray"
              className="grid xl:hidden"
            >
              <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
            </IconButton>
          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
          </IconButton>

          <SignOut />
        </div>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
